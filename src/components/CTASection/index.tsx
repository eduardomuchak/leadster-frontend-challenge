import CTAImage from "@/assets/misc/comparativo_img_CTA.png";
import NoCard from "@/assets/misc/no-card-dark.webp";
import Rating from "@/assets/misc/rating.webp";
import SeloRD from "@/assets/misc/selo_RD.png";
import Image from "next/image";

function CTASection() {
  return (
    <section
      className="grid w-full grid-cols-1 bg-light-blue py-4 md:grid-cols-2 md:py-8 lg:py-16"
      data-cy="cta-section"
    >
      <div className="flex items-center justify-end px-8">
        <Image
          src={CTAImage}
          alt="Imagem de Call to Action"
          className="w-full max-w-2xl"
        />
      </div>
      <div className="flex flex-col items-start justify-center px-8">
        <div className="w-full max-w-xl">
          <div className="flex w-full flex-col">
            <h1 className="text-lg md:text-2xl lg:text-4xl">
              Pronto para triplicar sua <br />
              <strong>Geração de Leads?</strong>
            </h1>

            <h2 className="text-md lg:text-lg">
              Criação e ativação em <strong>4 minutos</strong>.
            </h2>
            <div className="h-[2px] w-full bg-gray-bd" />
          </div>
        </div>
        <div className="mt-4 flex w-full max-w-2xl flex-row flex-wrap">
          <div className="flex flex-row flex-wrap justify-center gap-4">
            <button className="group h-14 w-fit rounded-full bg-primary-blue-300 px-4 text-black transition-colors hover:bg-primary-blue-400 lg:h-[70px]">
              <span className="flex w-fit items-center justify-center px-5 py-2 text-center text-sm font-bold leading-5 text-white transition-colors lg:text-base">
                VER DEMONSTRAÇÃO
              </span>
            </button>
            <Image src={SeloRD} alt="Selo RD Station" className="w-fit" />
          </div>
          <div className="mt-4 flex flex-row flex-wrap justify-center gap-2">
            <Image
              src={NoCard}
              alt="Ícone de cartão de crédito com um traço em cima"
              className="h-4"
            />
            <span className="text-sm font-semibold text-black">
              <strong>Não</strong> é necessário de Cartão de Crédito
            </span>
            <span className="hidden text-sm font-semibold text-black lg:block">
              |
            </span>
            <Image src={Rating} alt="Ícones de estrelas" className="h-4" />
            <span className="text-sm font-semibold text-black">
              <strong>4.9</strong>/5 média de satisfação
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
