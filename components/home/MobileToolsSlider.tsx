import Image from "next/image";

const sliderLogos = [
  { src: "/images/home/slider/cursor-white.svg", alt: "Cursor", w: 50, h: 50 },
  { src: "/images/home/slider/v0.svg", alt: "v0", w: 50, h: 50 },
  { src: "/images/home/slider/bolt-icon.png", alt: "Bolt", w: 50, h: 54 },
  { src: "/images/home/slider/lovable.png", alt: "Lovable", w: 88, h: 22 },
  { src: "/images/home/slider/bubble.png", alt: "Bubble", w: 92, h: 62 },
  { src: "/images/home/slider/deploy.png", alt: "Deploy", w: 50, h: 50 },
  { src: "/images/home/slider/replit.png", alt: "Replit", w: 148, h: 59 },
  { src: "/images/home/slider/base44.svg", alt: "Base44", w: 190, h: 47 },
];

export default function MobileToolsSlider() {
  return (
    <div className="block lg:hidden w-full overflow-hidden">
      <div
        className="flex items-center gap-[50px] px-[40px] py-[12px] animate-scroll-left"
        style={{
          background: "linear-gradient(90deg, #1c5af9 0%, #113593 100%)",
          width: "max-content",
        }}
      >
        {[...sliderLogos, ...sliderLogos].map((logo, i) => (
          <Image
            key={`${logo.alt}-${i}`}
            src={logo.src}
            alt={logo.alt}
            width={logo.w}
            height={logo.h}
            className="object-contain shrink-0 h-[28px] w-auto"
          />
        ))}
      </div>
    </div>
  );
}
