import Link from "next/link";

export const metadata = {
  title: "Payment Cancelled — Launchieve",
};

export default function PaymentCancelledPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f8f9fb] px-4">
      <div className="w-full max-w-[520px] rounded-[24px] border border-[#e9ebf1] bg-white px-6 py-10 text-center shadow-[0px_24px_80px_rgba(15,23,42,0.12)] sm:px-10 sm:py-12">
        <h1 className="mb-3 font-display text-[24px] font-extrabold text-[#111827] sm:text-[30px]">
          Payment Cancelled
        </h1>
        <p className="mx-auto mb-8 max-w-[400px] text-[14px] font-medium leading-6 text-[#475467] sm:text-[15px] sm:leading-7">
          Your payment was not completed. No charges have been made. You can
          return to try again anytime.
        </p>
        <Link
          className="inline-flex h-[56px] items-center justify-center rounded-[80px] bg-[#1C5AF9] px-[38px] font-display text-[15px] font-extrabold uppercase text-white transition hover:bg-[#2a68ff] sm:h-[58px] sm:text-[16px]"
          href="/premium-audit"
        >
          Try Again
        </Link>
      </div>
    </div>
  );
}
