import Background from "@/components/sections/Background";
import HeaderBanner from "@/components/sections/HeaderBanner";
import BrandHero from "@/components/sections/BrandHero";
import StepsList from "@/components/sections/StepsList";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Background Layer */}
      <Background />

      {/* Sticky Countdown Header */}
      <HeaderBanner />

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center w-full">
        {/* Brand Hero with Logo, Marquee and Gift Card */}
        <BrandHero />

        {/* Steps List */}
        <StepsList />

        {/* CTA Section */}
        <CTASection />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
