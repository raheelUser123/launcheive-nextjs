import Image from "next/image";

function icon(src: string) {
  return (
    <Image src={src} alt="" width={68} height={68} className="w-auto h-auto" />
  );
}

function illustration(src: string) {
  return <Image src={src} alt="" width={80} height={80} />;
}

const positions = {
  tl: "top-[12px] left-[16px]",
  tr: "top-[12px] right-[16px]",
  ml: "top-[50%] -translate-y-1/2 left-[-6px]",
  mr: "top-[50%] -translate-y-1/2 right-[-6px]",
  bl: "bottom-[12px] left-[50px]",
  br: "bottom-[12px] right-[50px]",
} as const;

const services = [
  {
    title: "Product Design",
    desc: "Figma-based UI/UX design built around how your users actually think, not just how the product looks. We design for real use — and for clean handoff to development.",
    illustration: illustration("/images/build-with-us/product-design/design-prototype.svg"),
    floatingIcons: [
      { position: positions.tl, icon: icon("/images/build-with-us/product-design/figma.svg") },
      { position: positions.tr, icon: icon("/images/build-with-us/product-design/sketch.svg") },
      { position: positions.ml, icon: icon("/images/build-with-us/product-design/uxpin.svg") },
      { position: positions.mr, icon: icon("/images/build-with-us/product-design/miro.svg") },
      { position: positions.bl, icon: icon("/images/build-with-us/product-design/invision.svg") },
      { position: positions.br, icon: icon("/images/build-with-us/product-design/google-analytics.svg") },
    ],
  },
  {
    title: "Web Applications",
    desc: "React and Next.js applications architected for the long term. Clean structure, maintainable code, and built with your next hire in mind — not just the next sprint.",
    illustration: illustration("/images/build-with-us/web-apps/web-development.svg"),
    floatingIcons: [
      { position: positions.tl, icon: icon("/images/build-with-us/web-apps/react.svg") },
      { position: positions.tr, icon: icon("/images/build-with-us/web-apps/nextjs.svg") },
      { position: positions.ml, icon: icon("/images/build-with-us/web-apps/javascript.svg") },
      { position: positions.mr, icon: icon("/images/build-with-us/web-apps/tailwind.svg") },
      { position: positions.bl, icon: icon("/images/build-with-us/web-apps/html5.svg") },
      { position: positions.br, icon: icon("/images/build-with-us/web-apps/css3.svg") },
    ],
  },
  {
    title: "Mobile Applications",
    desc: "Native and cross-platform mobile apps for founders who need to be where their users are.",
    illustration: illustration("/images/build-with-us/mobile-apps/mobile-app.svg"),
    floatingIcons: [
      { position: positions.tl, icon: icon("/images/build-with-us/mobile-apps/flutter.svg") },
      { position: positions.tr, icon: icon("/images/build-with-us/mobile-apps/react-native.svg") },
      { position: positions.ml, icon: icon("/images/build-with-us/mobile-apps/java.svg") },
      { position: positions.mr, icon: icon("/images/build-with-us/mobile-apps/swift.svg") },
      { position: positions.bl, icon: icon("/images/build-with-us/mobile-apps/objective-c.svg") },
      { position: positions.br, icon: icon("/images/build-with-us/mobile-apps/kotlin.svg") },
    ],
  },
  {
    title: "Backend & APIs",
    desc: "Scalable backend systems and API architecture that won't buckle under real-world load. Designed for growth from day one.",
    illustration: illustration("/images/build-with-us/backend-apis/api-server.svg"),
    floatingIcons: [
      { position: positions.tl, icon: icon("/images/build-with-us/backend-apis/rest-api.svg") },
      { position: positions.tr, icon: icon("/images/build-with-us/backend-apis/ktor.svg") },
      { position: positions.ml, icon: icon("/images/build-with-us/backend-apis/grpc.svg") },
      { position: positions.mr, icon: icon("/images/build-with-us/backend-apis/graphql.svg") },
      { position: positions.bl, icon: icon("/images/build-with-us/backend-apis/grpc-text.svg") },
      { position: positions.br, icon: icon("/images/build-with-us/backend-apis/soap.svg") },
    ],
  },
  {
    title: "No-Code To Real Code Migrations",
    desc: "Built something on Bubble, Webflow, or an AI-generated codebase that's getting hard to maintain? We migrate products onto proper engineering foundations — cleanly, without throwing away everything that works.",
    illustration: illustration("/images/build-with-us/no-code/code-migration.svg"),
    floatingIcons: [
      { position: positions.tl, icon: icon("/images/build-with-us/no-code/webflow.svg") },
      { position: positions.tr, icon: icon("/images/build-with-us/no-code/appsmith.svg") },
      { position: positions.ml, icon: icon("/images/build-with-us/no-code/glide.svg") },
      { position: positions.mr, icon: icon("/images/build-with-us/no-code/framer.svg") },
      { position: positions.bl, icon: icon("/images/build-with-us/no-code/airtable.svg") },
      { position: positions.br, icon: icon("/images/build-with-us/no-code/bubble.svg") },
    ],
  },
  {
    title: "DevOps & Deployment",
    desc: "We don't hand you a build and disappear. Our DevOps team handles infrastructure setup, deployment pipelines, and environment configuration — so your product goes live properly. For mobile apps, we manage the full App Store and Google Play submission process from start to finish.",
    illustration: illustration("/images/build-with-us/devops/cloud-deployment.svg"),
    floatingIcons: [
      { position: positions.tl, icon: icon("/images/build-with-us/devops/kubernetes.svg") },
      { position: positions.tr, icon: icon("/images/build-with-us/devops/docker.svg") },
      { position: positions.ml, icon: icon("/images/build-with-us/devops/ansible.svg") },
      { position: positions.mr, icon: icon("/images/build-with-us/devops/jenkins.svg") },
      { position: positions.bl, icon: icon("/images/build-with-us/devops/terraform.svg") },
      { position: positions.br, icon: icon("/images/build-with-us/devops/gitlab.svg") },
    ],
  },
];

export default services;
