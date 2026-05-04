"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { fetchCheckoutSessionForRecovery } from "@/app/actions/resume-checkout";
import { getStripePublicKey } from "@/app/actions/checkout";
import { Loader2 } from "lucide-react";

export default function CheckoutRecoveryPage() {
  const params = useParams();
  const id = params.id as string;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [stripePromise, setStripePromise] = useState<any>(null);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [submissionContext, setSubmissionContext] = useState<any>(null);

  useEffect(() => {
    async function init() {
      try {
        const pk = await getStripePublicKey();
        if (pk) setStripePromise(loadStripe(pk));
      } catch (err) {
        console.error("Failed to load stripe key:", err);
      }
    }
    
    init();
  }, []);

  useEffect(() => {
    if (!id) return;

    async function recover() {
      const response = await fetchCheckoutSessionForRecovery(id);
      if (!response.success) {
        setError(response.error || "Failed to load recovery process");
        setLoading(false);
        return;
      }

      setClientSecret(response.clientSecret || null);
      setSubmissionContext(response.submission);
      setLoading(false);
    }

    recover();
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
         <Loader2 className="size-10 animate-spin text-[#1C5AF9]" />
      </div>
    );
  }

  if (error || !submissionContext) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
        <h1 className="mb-2 text-2xl font-bold text-red-600">Recovery Failed</h1>
        <p className="text-gray-600">{error || "Could not retrieve your checkout form."}</p>
      </div>
    );
  }

  // Safely extract out values to render a preview 
  // Filtering out internal fields or massive objects
  const displayableFields = Object.entries(submissionContext).filter(
    ([key]) => !["_id", "formType", "status", "createdAt"].includes(key)
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
            <h1 className="font-display text-3xl font-extrabold text-[#111827] sm:text-4xl">
              Complete Your {submissionContext.formType || "Audit"}
            </h1>
            <p className="mt-4 text-lg text-[#475467]">
              You're just one step away. We've saved all your information below.
            </p>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Read-Only Form Context */}
          <div className="lg:col-span-5 mb-8 lg:mb-0">
             <div className="rounded-[24px] border border-[#e9ebf1] bg-white p-6 shadow-sm sm:p-8">
                <h3 className="mb-6 font-display text-xl font-bold text-[#111827] border-b pb-4">
                  Your Provided Details
                </h3>
                
                <div className="space-y-5">
                   {displayableFields.map(([key, rawValue]) => {
                      // format keys from camelCase to Title Case loosely
                      const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                      
                      let displayValue = String(rawValue);
                      if (Array.isArray(rawValue)) {
                        displayValue = rawValue.join(", ");
                      } else if (!rawValue) {
                        displayValue = "N/A";
                      }
                      
                      return (
                        <div key={key}>
                          <p className="mb-1 text-[13px] font-bold uppercase tracking-wider text-[#98a2b3]">
                            {formattedKey}
                          </p>
                          <p className="text-[15px] font-medium text-[#111827] break-all">
                            {displayValue}
                          </p>
                        </div>
                      )
                   })}
                </div>
             </div>
          </div>

          {/* Right Column: Embedded Stripe Checkout */}
          <div className="lg:col-span-7">
             <div className="rounded-[24px] border border-[#e9ebf1] bg-white p-4 shadow-xl sm:p-6 min-h-[500px]">
                {stripePromise && clientSecret ? (
                  <EmbeddedCheckoutProvider
                    stripe={stripePromise}
                    options={{ clientSecret }}
                  >
                    <EmbeddedCheckout />
                  </EmbeddedCheckoutProvider>
                ) : (
                  <div className="flex h-full min-h-[400px] items-center justify-center">
                    <Loader2 className="size-8 animate-spin text-[#1C5AF9]" />
                  </div>
                )}
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
