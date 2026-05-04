"use client";

import Image from "next/image";
import { useRef } from "react";
import WordRevealText from "@/components/ui/WordRevealText";
import useScrollReveal from "@/hooks/useScrollReveal";
import ServiceCard from "../home/ServiceCard";

const services = [
  {
    title: "Product Design",
    desc: "Figma-based UI/UX design built around how your users actually think, not just how the product looks. We design for real use — and for clean handoff to development.",
    illustration: (
      <Image
        src="/images/build-with-us/product-design/design-prototype.svg"
        alt=""
        width={80}
        height={80}
      />
    ),
    floatingIcons: [
      {
        position: "top-[12px] left-[16px]",
        icon: (
          <Image
            src="/images/build-with-us/product-design/figma.svg"
            alt=""
            width={68}
            height={68}
            className="w-auto h-auto"
          />
        ),
      },
      {
        position: "top-[12px] right-[16px]",
        icon: (
          <Image
            src="/images/build-with-us/product-design/sketch.svg"
            alt=""
            width={68}
            height={68}
            className="w-auto h-auto"
          />
        ),
      },
      {
        position: "top-[50%] -translate-y-1/2 left-[-6px]",
        icon: (
          <Image
            src="/images/build-with-us/product-design/uxpin.svg"
            alt=""
            width={68}
            height={68}
            className="w-auto h-auto"
          />
        ),
      },
      {
        position: "top-[50%] -translate-y-1/2 right-[-6px]",
        icon: (
          <Image
            src="/images/build-with-us/product-design/miro.svg"
            alt=""
            width={68}
            height={68}
            className="w-auto h-auto"
          />
        ),
      },
      {
        position: "bottom-[12px] left-[50px]",
        icon: (
          <Image
            src="/images/build-with-us/product-design/invision.svg"
            alt=""
            width={68}
            height={68}
            className="w-auto h-auto"
          />
        ),
      },
      {
        position: "bottom-[12px] right-[50px]",
        icon: (
          <Image
            src="/images/build-with-us/product-design/google-analytics.svg"
            alt=""
            width={68}
            height={68}
            className="w-auto h-auto"
          />
        ),
      },
    ],
  },
  {
    title: "Web Applications",
    desc: "React and Next.js applications architected for the long term. Clean structure, maintainable code, and built with your next hire in mind — not just the next sprint.",
    illustration: (
      <Image
        src="/images/build-with-us/web-apps/web-development.svg"
        alt=""
        width={80}
        height={80}
      />
    ),
    floatingIcons: [
      {
        position: "top-[12px] left-[16px]",
        icon: (
          <Image
            src="/images/build-with-us/web-apps/react.svg"
            alt=""
            width={68}
            height={68}
            className="w-auto h-auto"
          />
        ),
      },
      {
        position: "top-[12px] right-[16px]",
        icon: (
          <Image
            src="/images/build-with-us/web-apps/nextjs.svg"
            alt=""
            width={68}
            height={68}
            className="w-auto h-auto"
          />
        ),
      },
      {
        position: "top-[50%] -translate-y-1/2 left-[-6px]",
        icon: (
          <Image
            src="/images/build-with-us/web-apps/javascript.svg"
            alt=""
            width={68}
            height={68}
            className="w-auto h-auto"
          />
        ),
      },
      {
        position: "top-[50%] -translate-y-1/2 right-[-6px]",
        icon: (
          <Image
            src="/images/build-with-us/web-apps/tailwind.svg"
            alt=""
            width={68}
            height={68}
            className="w-auto h-auto"
          />
        ),
      },
      {
        position: "bottom-[12px] left-[50px]",
        icon: (
          <Image
            src="/images/build-with-us/web-apps/html5.svg"
            alt=""
            width={68}
            height={68}
            className="w-auto h-auto"
          />
        ),
      },
      {
        position: "bottom-[12px] right-[50px]",
        icon: (
          <Image
            src="/images/build-with-us/web-apps/css3.svg"
            alt=""
            width={68}
            height={68}
            className="w-auto h-auto"
          />
        ),
      },
    ],
  },
  {
    title: "Mobile Applications",
    desc: "Native and cross-platform mobile apps for founders who need to be where their users are.",
    illustration: (
      <Image
        src="/images/build-with-us/mobile-apps/mobile-app.svg"
        alt=""
        width={80}
        height={80}
      />
    ),
    floatingIcons: [
      {
        position: "top-[12px] left-[16px]",
        icon: (
          <Image
            src="/images/build-with-us/mobile-apps/flutter.svg"
            alt=""
            width={68}
            height={68}
            className="w-auto h-auto"
          />
        ),
      },
      {
        position: "top-[12px] right-[16px]",
        icon: (
          <Image
            src="/images/build-with-us/mobile-apps/react-native.svg"
            alt=""
            width={68}
            height={68}
            className="w-auto h-auto"
          />
        ),
      },
      {
        position: "top-[50%] -translate-y-1/2 left-[-6px]",
        icon: (
          <Image
            src="/images/build-with-us/mobile-apps/java.svg"
            alt=""
            width={68}
            height={68}
            className="w-auto h-auto"
          />
        ),
      },
      {
        position: "top-[50%] -translate-y-1/2 right-[-6px]",
        icon: (
          <Image
            src="/images/build-with-us/mobile-apps/swift.svg"
            alt=""
            width={68}
            height={68}
            className="w-auto h-auto"
          />
        ),
      },
      {
        position: "bottom-[12px] left-[50px]",
        icon: (
          <Image
            src="/images/build-with-us/mobile-apps/objective-c.svg"
            alt=""
            width={68}
            height={68}
            className="w-auto h-auto"
          />
        ),
      },
      {
        position: "bottom-[12px] right-[50px]",
        icon: (
          <Image
            src="/images/build-with-us/mobile-apps/kotlin.svg"
            alt=""
            width={68}
            height={68}
            className="w-auto h-auto"
          />
        ),
      },
    ],
  },
  {
    title: "Backend & APIs",
    desc: "Scalable backend systems and API architecture that won't buckle under real-world load. Designed for growth from day one.",
    illustration: (
      <Image
        src="/images/build-with-us/backend-apis/api-server.svg"
        alt=""
        width={80}
        height={80}
      />
    ),
    floatingIcons: [
      {
        position: "top-[12px] left-[16px]",
        icon: (
          <Image
            src="/images/build-with-us/backend-apis/rest-api.svg"
            alt=""
            width={68}
            height={68}
            className="w-auto h-auto"
          />
        ),
      },
      {
        position: "top-[12px] right-[16px]",
        icon: (
          <Image
            src="/images/build-with-us/backend-apis/ktor.svg"
            alt=""
            width={68}
            height={68}
            className="w-auto h-auto"
          />
        ),
      },
      {
        position: "top-[50%] -translate-y-1/2 left-[-6px]",
        icon: (
          <Image
            src="/images/build-with-us/backend-apis/grpc.svg"
            alt=""
            width={68}
            height={68}
            className="w-auto h-auto"
          />
        ),
      },
      {
        position: "top-[50%] -translate-y-1/2 right-[-6px]",
        icon: (
          <Image
            src="/images/build-with-us/backend-apis/graphql.svg"
            alt=""
            width={68}
            height={68}
            className="w-auto h-auto"
          />
        ),
      },
      {
        position: "bottom-[12px] left-[50px]",
        icon: (
          <Image
            src="/images/build-with-us/backend-apis/grpc-text.svg"
            alt=""
            width={68}
            height={68}
            className="w-auto h-auto"
          />
        ),
      },
      {
        position: "bottom-[12px] right-[50px]",
        icon: (
          <Image
            src="/images/build-with-us/backend-apis/soap.svg"
            alt=""
            width={68}
            height={68}
            className="w-auto h-auto"
          />
        ),
      },
    ],
  },
  {
    title: "No-Code To Real Code Migrations",
    desc: "Built something on Bubble, Webflow, or an AI-generated codebase that's getting hard to maintain? We migrate products onto proper engineering foundations — cleanly, without throwing away everything that works.",
    illustration: (
      <Image
        src="/images/build-with-us/no-code/code-migration.svg"
        alt=""
        width={80}
        height={80}
      />
    ),
    floatingIcons: [
      {
        position: "top-[12px] left-[16px]",
        icon: (
          <Image
            src="/images/build-with-us/no-code/webflow.svg"
            alt=""
            width={68}
            height={68}
            className="w-auto h-auto"
          />
        ),
      },
      {
        position: "top-[12px] right-[16px]",
        icon: (
          <Image
            src="/images/build-with-us/no-code/appsmith.svg"
            alt=""
            width={68}
            height={68}
            className="w-auto h-auto"
          />
        ),
      },
      {
        position: "top-[50%] -translate-y-1/2 left-[-6px]",
        icon: (
          <Image
            src="/images/build-with-us/no-code/glide.svg"
            alt=""
            width={68}
            height={68}
            className="w-auto h-auto"
          />
        ),
      },
      {
        position: "top-[50%] -translate-y-1/2 right-[-6px]",
        icon: (
          <Image
            src="/images/build-with-us/no-code/framer.svg"
            alt=""
            width={68}
            height={68}
            className="w-auto h-auto"
          />
        ),
      },
      {
        position: "bottom-[12px] left-[50px]",
        icon: (
          <Image
            src="/images/build-with-us/no-code/airtable.svg"
            alt=""
            width={68}
            height={68}
            className="w-auto h-auto"
          />
        ),
      },
      {
        position: "bottom-[12px] right-[50px]",
        icon: (
          <Image
            src="/images/build-with-us/no-code/bubble.svg"
            alt=""
            width={68}
            height={68}
            className="w-auto h-auto"
          />
        ),
      },
    ],
  },
  {
    title: "DevOps & Deployment",
    desc: "We don't hand you a build and disappear. Our DevOps team handles infrastructure setup, deployment pipelines, and environment configuration — so your product goes live properly. For mobile apps, we manage the full App Store and Google Play submission process from start to finish.",
    illustration: (
      <Image
        src="/images/build-with-us/devops/cloud-deployment.svg"
        alt=""
        width={80}
        height={80}
      />
    ),
    floatingIcons: [
      {
        position: "top-[12px] left-[16px]",
        icon: (
          <Image
            src="/images/build-with-us/devops/kubernetes.svg"
            alt=""
            width={68}
            height={68}
            className="w-auto h-auto"
          />
        ),
      },
      {
        position: "top-[12px] right-[16px]",
        icon: (
          <Image
            src="/images/build-with-us/devops/docker.svg"
            alt=""
            width={68}
            height={68}
            className="w-auto h-auto"
          />
        ),
      },
      {
        position: "top-[50%] -translate-y-1/2 left-[-6px]",
        icon: (
          <Image
            src="/images/build-with-us/devops/ansible.svg"
            alt=""
            width={68}
            height={68}
            className="w-auto h-auto"
          />
        ),
      },
      {
        position: "top-[50%] -translate-y-1/2 right-[-6px]",
        icon: (
          <Image
            src="/images/build-with-us/devops/jenkins.svg"
            alt=""
            width={68}
            height={68}
            className="w-auto h-auto"
          />
        ),
      },
      {
        position: "bottom-[12px] left-[50px]",
        icon: (
          <Image
            src="/images/build-with-us/devops/terraform.svg"
            alt=""
            width={68}
            height={68}
            className="w-auto h-auto"
          />
        ),
      },
      {
        position: "bottom-[12px] right-[50px]",
        icon: (
          <Image
            src="/images/build-with-us/devops/gitlab.svg"
            alt=""
            width={68}
            height={68}
            className="w-auto h-auto"
          />
        ),
      },
    ],
  },
];

export default function WhatWeBuild() {
  const scope = useRef<HTMLDivElement>(null);
  useScrollReveal(scope, ["start 0.9", "start 0.3"], ["start 0.9", "start 0.3"]);

  return (
    <section className="relative py-[30px] overflow-hidden bg-black">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 40% 50%, rgba(28,90,249,0.25) 0%, rgba(59,110,248,0.1) 30%, rgba(26,71,185,0.05) 60%, transparent 80%)",
          transform: "translateZ(0)",
        }}
      />
      <Image
        src="/images/build-with-us/pulse.svg"
        alt=""
        width={1920}
        height={1080}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none"
      />

      <div className="relative z-10 max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={scope} className="mb-[20px]">
          <WordRevealText as="h2" className="font-display font-extrabold text-[30px] sm:text-[42px] md:text-[60px] leading-[100%] uppercase text-white">
            WHAT WE <span className="text-[#1C5AF9]">BUILD</span>
          </WordRevealText>

          <WordRevealText as="p" className="font-body font-medium text-[20px] leading-[normal] tracking-[-0.8px] text-white mt-[20px]">
            We cover the full product stack — from design to deployment.
          </WordRevealText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[33px] gap-y-[34px] mb-[30px]">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.desc}
              illustration={service.illustration}
              floatingIcons={service.floatingIcons}
              animationDelay={`${i * 0.08}s`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
