import AboveTheFoldSection from "@/components/AboveTheFoldSection";
import CTASection from "@/components/CTASection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <div className="flex w-full flex-col justify-center">
        <AboveTheFoldSection />
        <HeroSection />
        <CTASection />
      </div>
    </main>
  );
}
