"use server";

import Stripe from "stripe";
import { ObjectId } from "mongodb";
import clientPromise from "@/lib/db";

const stripe = new Stripe(process.env.STRIPE_SK_KEY || "", {
  apiVersion: "2024-12-18.acacia" as any,
});

export async function fetchCheckoutSessionForRecovery(submissionId: string) {
  try {
    const client = await clientPromise;
    const db = client.db("launchieve");
    
    let objectId;
    try {
        objectId = new ObjectId(submissionId);
    } catch {
        return { success: false, error: "Invalid submission ID format." };
    }

    // 1. Fetch submission details
    const submission = await db.collection("submissions").findOne({ _id: objectId });
    
    if (!submission) {
      return { success: false, error: "Submission not found." };
    }

    if (!process.env.STRIPE_PRICE_ID) {
        throw new Error("Stripe configuration is missing.");
    }

    // 2. Spawn a new checkout session securely
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded" as any,
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],
      mode: "payment",
      metadata: {
        submissionId: submission._id.toString(),
        formType: submission.formType || "Unknown",
        customerEmail: submission.email,
        customerName: submission.name,
      },
      customer_email: submission.email,
      return_url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/checkout/return?session_id={CHECKOUT_SESSION_ID}`,
    });

    return { 
      success: true, 
      clientSecret: session.client_secret,
      // Serialize DB object removing mongodb specific types so it plays nice with React Client Props
      submission: {
        ...submission,
        _id: submission._id.toString(),
      }
    };
  } catch (error: any) {
    console.error("Failed to recover checkout:", error);
    return { success: false, error: error.message || "Unknown error occurred" };
  }
}
