import { Button } from "../ui/Button";

function HeroSection() {
  return (
    <section className="bg-red flex w-full bg-white px-5 py-6 md:py-12 lg:py-[90px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-center">
        <Button>Agências</Button>
      </div>
    </section>
  );
}

export default HeroSection;
