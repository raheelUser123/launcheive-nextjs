"use server";

import clientPromise from "@/lib/db";

export async function submitAuditForm(
  formType: "Free Audit" | "Premium Audit",
  formData: any
) {
  const user = process.env.SEND_EMAIL_FROM;
  const key = process.env.EMAIL_API_KEY;
  const adminto = process.env.SEND_EMAIL_TO;

  if (!user || !key || !adminto) {
    console.error("Missing email credentials");
    return { success: false, error: "Missing email credentials" };
  }

  // 1. Save to MongoDB
  try {
    const client = await clientPromise;
    const db = client.db("launchieve");

    const submissionRecord = {
      ...formData,
      formType,
      createdAt: new Date(),
      status: "submitted",
    };

    // Store free audits in their own collection as requested by user
    await db.collection("free_submissions").insertOne(submissionRecord);
  } catch (dbError) {
    console.error("Database save failed:", dbError);
  }

  const to = user;
  const subject = `New ${formType} Submission from ${formData.name || "Unknown"}`;

  const useremail = formData.email;
  // const subjectUser = `Thank you for your ${formType} Submission`;
  const subjectUser = `We've received your submission. We'll be in touch shortly.`;
  // const textUser = `Hi ${formData.name || "there"},\n\nWe have successfully received your ${formType} submission. We will review your details and get back to you shortly.\n\nThank you,\nFusionSync Solutions Team`;
  const textUser = `Hi ${formData.name || "there"},
<br/>
<br/>
Thank you for submitting your idea. We've received everything and our team will take a look shortly.
<br/>
<br/>
We review every submission personally. You'll hear from us with an honest first opinion, not a generic response.
<br/>
<br/>
In the meantime, if there's anything else you'd like us to know about your product or idea, just reply to this email. We read every reply.
<br/>
<br/>
Talk soon,
<br/>
<br/>
The Launchieve Team
<br/>
launchieve.com`;
  const text = Object.entries(formData)
    .map(([key, value]) => {
      // Format key: camelCase to 'Label' (e.g. auditGoals -> Audit Goals)
      const label = key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, (str) => str.toUpperCase());
      
      const val = Array.isArray(value) ? value.join(", ") : value;
      return `<strong>${label}</strong>: ${val}`;
    })
    .join("<br/>");

  try {
    const response = await fetch("https://emailserver.projectstagingapp.com/api/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        auth: {
          user,
          key,
        },
        data: {
          to: useremail,
          subject: subjectUser,
          text: textUser,
          isScheduled: false,
        },
        other: {
          to: adminto,
          subject: subject,
          text: text,
          isScheduled: false,
        },
      }),
    });
    if (!response.ok) {
      throw new Error(`Failed to send email: ${response.statusText}`);
    }

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "Failed to send email" };
  }
}
