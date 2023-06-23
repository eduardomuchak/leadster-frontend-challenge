import { cards } from "@/mocks/cards";
import { options } from "@/mocks/selectOptions";
import CardsContainer from "../CardsContainer";
import VideoCardModal from "../VideoCardModal";
import Button from "../ui/Button";
import Select from "../ui/Select";

function HeroSection() {
  return (
    <section className="bg-red flex w-full bg-white px-5 py-6 md:py-12 lg:py-[90px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-center">
        <div className="flex w-full items-center justify-between pb-7">
          <div className="flex w-full flex-row items-center gap-3 ">
            <Button>Agências</Button>
            <Button>Chatbot</Button>
            <Button>Marketing Digital</Button>
            <Button>Geração de Leads</Button>
            <Button>Mídia Paga</Button>
          </div>
          <div className="flex min-w-[312px] flex-row items-center gap-3 ">
            <label className="flex min-w-[100px] flex-1 text-base font-semibold">
              Ordenar por
            </label>
            <Select options={options} />
          </div>
        </div>
        <CardsContainer>
          {cards.map((card) => (
            <VideoCardModal key={card.id} data={card} />
          ))}
        </CardsContainer>
      </div>
    </section>
  );
}

export default HeroSection;
