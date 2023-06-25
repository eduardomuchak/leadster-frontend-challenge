"use client";

import { cards } from "@/mocks/cards";
import { options } from "@/mocks/selectOptions";
import { useState } from "react";
import CardsContainer from "../CardsContainer";
import PaginateCards from "../PaginateCards";
import VideoCardModal from "../VideoCardModal";
import Button from "../ui/Button";
import Select from "../ui/Select";

function HeroSection() {
  const [currentTab, setCurrentTab] = useState(0);
  const cardsPerPage = 9;
  const pageCount = Math.ceil(cards.length / cardsPerPage);

  const handleTabChange = (tabIndex: number) => {
    setCurrentTab(tabIndex);
  };

  const startIndex = currentTab * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = cards.slice(startIndex, endIndex);

  return (
    <section className="bg-red flex w-full bg-white px-5 py-6 md:py-12 lg:py-[90px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-center">
        <div className="flex w-full flex-wrap items-center justify-between gap-5 pb-7">
          <div className="flex w-full flex-row flex-wrap items-center gap-3">
            <Button>Agências</Button>
            <Button>Chatbot</Button>
            <Button>Marketing Digital</Button>
            <Button>Geração de Leads</Button>
            <Button>Mídia Paga</Button>
          </div>
          <div className="flex min-w-[312px] flex-row items-center gap-3 ">
            <label className="flex min-w-[100px] flex-1 text-sm font-semibold md:text-base">
              Ordenar por
            </label>
            <Select options={options} />
          </div>
        </div>
        <CardsContainer>
          {currentCards.map((card) => (
            <VideoCardModal key={card.id} data={card} />
          ))}
        </CardsContainer>

        <PaginateCards
          pageCount={pageCount}
          currentTab={currentTab}
          handleTabChange={handleTabChange}
        />
      </div>
    </section>
  );
}

export default HeroSection;
