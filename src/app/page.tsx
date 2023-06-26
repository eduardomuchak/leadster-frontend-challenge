import AboveTheFoldSection from "@/components/AboveTheFoldSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex min-h-screen w-full flex-col">
        <div className="flex w-full flex-col justify-center">
          <AboveTheFoldSection />
          <HeroSection />
          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
