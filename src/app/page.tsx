import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <Header />
      <main className="flex min-h-screen w-full flex-col items-center justify-center p-24">
        <h1>Hello World</h1>
      </main>
    </div>
  );
}
