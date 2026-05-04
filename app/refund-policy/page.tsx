import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollAnimationProvider from "@/components/ScrollAnimationProvider";
import RefundHero from "@/components/refund/RefundHero";
import RefundContent from "@/components/refund/RefundContent";

export default function RefundPolicyPage() {
  return (
    <ScrollAnimationProvider>
      <Navbar />
      <main>
        <RefundHero />
        <RefundContent />
      </main>
      <Footer />
    </ScrollAnimationProvider>
  );
}
