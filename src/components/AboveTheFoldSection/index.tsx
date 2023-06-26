import assetHeader from "@/assets/misc/asset-header.png";
import Image from "next/image";

function AboveTheFoldSection() {
  return (
    <section className="flex w-full bg-light-blue px-5 py-10 md:py-20 lg:py-40">
      <div className="mx-auto flex w-full max-w-[1480px] flex-col items-center justify-center">
        <div className="mb-4 rounded-r-full rounded-ss-full border-2 border-primary-blue-300 bg-white px-5 py-2 md:mb-8">
          <span className="text-sm font-semibold text-primary-blue-300 md:text-base">
            WEBINARS EXCLUSIVOS
          </span>
        </div>
        <div className="mb-4 border-b-2 border-gray-bd px-1 pb-4 md:mb-10 md:pb-10">
          <h1 className="text-center text-xl font-semibold leading-relaxed text-black md:text-3xl lg:text-5xl">
            Menos Conversinha,
          </h1>
          <div className="relative mt-2 w-fit md:mt-5">
            <h1 className="text-center text-4xl font-bold leading-relaxed text-primary-blue-300 md:text-6xl lg:text-8xl">
              Mais Conversão
            </h1>
            <Image
              src={assetHeader}
              alt="Spark"
              className="absolute -right-3 top-6 w-[28px] -translate-y-full md:-right-4 md:top-6 md:w-[40px] md:-translate-y-full lg:-right-5 lg:top-10 lg:w-[49px] lg:-translate-y-full"
              width={49}
              height={32}
            />
          </div>
        </div>
        <span className="mx-auto px-6 text-center text-sm md:px-12 lg:px-0 lg:text-xl">
          Conheça as estratégias que <strong>mudaram o jogo</strong> e como
          aplicá-las no seu negócio
        </span>
      </div>
    </section>
  );
}

export default AboveTheFoldSection;
