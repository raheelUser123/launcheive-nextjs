"use client";

import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { CircleCheckBig, Loader2, XCircle } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { trackEvent } from "@/utils/meta";
import { verifyCheckoutStatus } from "@/app/actions/checkout";

function CheckoutReturnContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const sessionId = searchParams.get("session_id");
  const [status, setStatus] = useState<"loading" | "complete" | "expired">("loading");

  useEffect(() => {
    if (!sessionId) {
      setStatus("expired");
      return;
    }

    const verify = async () => {
      try {
        const result = await verifyCheckoutStatus(sessionId);
        if (result.success) {
          const email = sessionStorage.getItem('checkout_email') || '';
          const phone = sessionStorage.getItem('checkout_phone') || '';

          trackEvent(
            'Purchase',
            {
              content_name: 'Premium Audit',
              content_type: 'product',
              currency: 'USD',
              value: 149
            },
            {
              email,
              phone,
              value: 149,
              currency: 'USD',
              contentName: 'Premium Audit'
            }
          );

          setStatus("complete");
          // Redirect to thank you page after a brief delay or immediately
          router.push('/thankyou');
        } else {
          setStatus("expired");
        }
      } catch (error) {
        console.error("Verification error:", error);
        setStatus("expired");
      }
    };

    verify();
  }, [sessionId, router]);

  if (status === "loading" || status === "complete") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="mx-auto size-10 animate-spin text-[#1C5AF9]" />
          <p className="mt-4 font-medium text-gray-600">
            {status === "complete" ? "Redirecting to thank you page..." : "Verifying your payment..."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-[24px] border border-[#e9ebf1] bg-white px-8 py-10 text-center shadow-[0px_24px_80px_rgba(15,23,42,0.12)]">
        <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-full bg-red-50 text-red-600">
          <XCircle className="size-8" />
        </div>

        <h1 className="mb-3 font-display text-[26px] font-extrabold text-red-600 sm:text-[30px]">
          Payment Failed
        </h1>

        <p className="mx-auto mb-8 text-[15px] leading-7 text-[#475467]">
          We couldn't verify your payment. If you believe this is an error, please contact our support team.
        </p>

        <Link
          href="/"
          className="inline-flex h-[56px] w-full items-center justify-center rounded-[80px] bg-[#1C5AF9] px-[38px] font-display text-[15px] font-extrabold uppercase text-white transition hover:bg-[#2a68ff]"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

export default function CheckoutReturnPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <Loader2 className="size-10 animate-spin text-[#1C5AF9]" />
      </div>
    }>
      <CheckoutReturnContent />
    </Suspense>
  );
}
