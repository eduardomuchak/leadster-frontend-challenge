import AboveTheFoldSection from "@/components/AboveTheFoldSection";
import CTASection from "@/components/CTASection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex w-full flex-col justify-center">
        <AboveTheFoldSection />
        <HeroSection />
        <CTASection />
      </main>
    </div>
  );
}
