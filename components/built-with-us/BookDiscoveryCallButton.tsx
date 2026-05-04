import Link from "next/link";
import { CALENDLY_URL } from "@/lib/calendly";
import clsx from "clsx";

export default function BookDiscoveryCallButton({
  className,
  children = "Book a Discovery Call",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <Link
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "inline-flex h-[58px] w-full max-w-[305px] items-center justify-center rounded-[80px] bg-[#1C5AF9] px-[50px] text-center font-display text-[16px] font-extrabold uppercase text-white transition-all duration-200 lg:w-auto lg:max-w-none",
        className,
      )}
    >
      {children}
    </Link>
  );
}
