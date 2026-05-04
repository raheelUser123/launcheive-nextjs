"use server";

import Stripe from "stripe";
import clientPromise from "@/lib/db";
import { submitAuditForm } from "./submit-audit";

// Initialize Stripe gracefully, but avoid crashing at build time if not set yet
const stripe = new Stripe(process.env.STRIPE_SK_KEY || "", {
  apiVersion: "2024-12-18.acacia" as any,
});

export async function createCheckoutSession(
  formType: "Free Audit" | "Premium Audit",
  formData: any
) {
  try {
    // 1. Save data to MongoDB
    const client = await clientPromise;
    const db = client.db("launchieve"); // Using the DB name from connection string

    // Add timestamp and form type
    const submissionRecord = {
      ...formData,
      formType,
      createdAt: new Date(),
      status: "pending_payment",
    };

    // Add to 'submissions' collection
    const result = await db.collection("submissions").insertOne(submissionRecord);
    const submissionId = result.insertedId;

    // 2. Dispatch Immediate Intake Email
    const userKey = process.env.SEND_EMAIL_FROM;
    const apiKey = process.env.EMAIL_API_KEY;
    const adminto = process.env.SEND_EMAIL_TO;

    if (userKey && apiKey && formData.email) {
      const recoveryUrl = `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/checkout/${submissionId.toString()}`;

      const intakeSubject = `Your audit intake is received. One step left.`;
      const intakeText = `Hi ${formData.name || "there"},
      <br/>
      <br/>
      We've received your intake form for the Premium Audit.
      <br/>
      <br/>
      If you haven't completed your payment yet, you can do so here:
      <br/>
      <br/>
      Complete your payment: ${recoveryUrl}
      <br/>
      <br/>
      Your audit begins once both your form and payment have been received. If you have any questions before completing your payment, or if anything has changed since you filled out the form, just reply to this email.
      <br/>
      <br/>
      We're looking forward to reviewing your product.
      <br/>
      <br/>
      The Launchieve Team
      <br/>
      launchieve.com`;

      const adminSubject = `New ${formType} Submission from ${formData.name || "Unknown"}`;
      const adminText = Object.entries(formData)
        .map(([key, value]) => {
          const label = key
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, (str) => str.toUpperCase());
          const val = Array.isArray(value) ? value.join(", ") : value;
          return `<strong>${label}</strong>: ${val}`;
        })
        .join("<br/>");

      // Send both emails (user confirmation + admin notification)
      await fetch("https://emailserver.projectstagingapp.com/api/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          auth: { user: userKey, key: apiKey },
          data: {
            to: formData.email,
            subject: intakeSubject,
            text: intakeText,
            isScheduled: false,
          },
          other: {
            to: adminto,
            subject: adminSubject,
            text: adminText,
            isScheduled: false,
          }
        })
      }).catch(err => console.error("Initial email dispatch failed:", err));
    }

    // 3. Create Stripe Checkout Session
    if (!process.env.STRIPE_PRICE_ID) {
      throw new Error("Missing STRIPE_PRICE_ID in environment variables");
    }

    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded" as any,
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],
      mode: "payment",
      // Metadata allows us to reference the MongoDB document if we use webhooks
      metadata: {
        submissionId: submissionId.toString(),
        formType,
        customerEmail: formData.email,
        customerName: formData.name,
      },
      customer_email: formData.email, // Pre-fills their email in Stripe
      // We must provide a return URL for Embedded Checkout instances
      return_url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/checkout/return?session_id={CHECKOUT_SESSION_ID}`,
    });

    // --- TIMEOUT REMINDER LOGIC (1 MINUTE) ---
    const userdetails = formData.email;
    setTimeout(async () => {
      try {
        const stripeCheck = await stripe.checkout.sessions.retrieve(session.id);

        if (stripeCheck.payment_status !== "paid") {
          const userKey = process.env.SEND_EMAIL_FROM;
          const apiKey = process.env.EMAIL_API_KEY;

          if (userKey && apiKey && userdetails) {
            const recoveryUrl = `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/checkout/${submissionId.toString()}`;
            const reminderSubject = `Your audit intake is received. One step left.`;
            const reminderText = `Hi ${formData.name || "there"},
            <br/>
            <br/>
            We've received your intake form for the Premium Audit.
            <br/>
            <br/>
            If you haven't completed your payment yet, you can do so here:
            <br/>
            <br/>
            Complete your payment: ${recoveryUrl}
            <br/>
            <br/>
            Your audit begins once both your form and payment have been received. If you have any questions before completing your payment, or if anything has changed since you filled out the form, just reply to this email.
            <br/>
            <br/>
            We're looking forward to reviewing your product.
            <br/>
            <br/>
            The Launchieve Team
            <br/>
            launchieve.com`;

            await fetch("https://emailserver.projectstagingapp.com/api/emails", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                auth: { user: userKey, key: apiKey },
                data: {
                  to: userdetails,
                  subject: reminderSubject,
                  text: reminderText,
                  isScheduled: false,
                }
              })
            }).catch(err => console.error("API error while sending reminder:", err));
          }
        }
      } catch (error) {
        console.error("Failed to query stripe or email API during schedule timer", error);
      }
      //}, 60 * 1000); // 60,000 milliseconds = 1 minute
    }, 30 * 60 * 1000); // 30 minutes
    // ------------------------------------------

    return {
      success: true,
      clientSecret: session.client_secret
    };

  } catch (error: any) {
    console.error("Checkout session creation failed:", error);
    return { success: false, error: error.message || "Failed to create checkout session" };
  }
}

export async function getStripePublicKey() {
  return process.env.STRIPE_PK_KEY || process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "";
}

export async function verifyCheckoutStatus(sessionId: string) {
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === "paid") {
      const submissionId = session.metadata?.submissionId;
      if (!submissionId) return { success: false, error: "Submission ID not found in metadata" };

      const client = await clientPromise;
      const db = client.db("launchieve");
      const ObjectId = require('mongodb').ObjectId;

      // Check current status to prevent duplicate emails
      const submission = await db.collection("submissions").findOne({ _id: new ObjectId(submissionId) });

      if (submission && submission.status === "pending_payment") {
        // Update status to paid
        await db.collection("submissions").updateOne(
          { _id: new ObjectId(submissionId) },
          { $set: { status: "paid", paidAt: new Date() } }
        );

        // Send Payment Confirmed Email
        const userKey = process.env.SEND_EMAIL_FROM;
        const apiKey = process.env.EMAIL_API_KEY;

        if (userKey && apiKey && submission.email) {
          const successSubject = `Payment Confirmed — Your Audit is Underway`;
          const successText = `Hi ${submission.name || "there"},
          <br/>
          <br/>
          Your payment has been confirmed and your Premium Audit is now underway.
          <br/>
          <br/>
          Here's what happens next:
          <br/>
          <br/>
          Our team will review your product across six areas. Market fit, UI/UX design, tech foundation, go-to-market strategy, revenue model, and competitive edge. You'll receive a written report delivered to this email address within 5 working days.
          <br/>
          <br/>
          A few things worth knowing:
          <br/>
          <br/>
          If you have additional context you'd like to share, a demo link, updated prototype, or anything else, reply to this email and we'll include it in the review.
          <br/>
          <br/>
          If you don't receive your report within 5 working days, contact us at info@launchieve.com and we'll resolve it immediately.
          <br/>
          <br/>
          This email serves as your receipt. Payment of $149 was processed securely by Launchieve. Your card statement will show Launchieve as the merchant.
          <br/>
          <br/>
          We take every audit seriously. You'll hear from us soon.
          <br/>
          <br/>
          The Launchieve Team
          <br/>
          launchieve.com | info@launchieve.com`;

          await fetch("https://emailserver.projectstagingapp.com/api/emails", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              auth: { user: userKey, key: apiKey },
              data: {
                to: submission.email,
                subject: successSubject,
                text: successText,
                isScheduled: false,
              }
            })
          }).catch(err => console.error("Success email dispatch failed:", err));
        }
      }
      return { success: true };
    }
    return { success: false, error: "Payment not completed" };
  } catch (error: any) {
    console.error("Verification failed:", error);
    return { success: false, error: error.message };
  }
}

