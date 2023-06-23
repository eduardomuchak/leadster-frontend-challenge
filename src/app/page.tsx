import AboveTheFoldSection from "@/components/AboveTheFoldSection";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex w-full flex-col justify-center">
        <AboveTheFoldSection />
      </main>
    </div>
  );
}
