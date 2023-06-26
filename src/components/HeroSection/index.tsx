"use client";

import { useCategories } from "@/hooks/useCategories";
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
  const {
    allCategories,
    currentCategory,
    handleCategoryChange,
    setCurrentCategory,
  } = useCategories();

  const filteredCards = currentCategory
    ? cards.filter((card) => card.category === currentCategory)
    : cards;
  const cardsPerPage = 9;
  const pageCount = Math.ceil(filteredCards.length / cardsPerPage);

  const startIndex = currentTab * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = filteredCards.slice(startIndex, endIndex);

  console.log("currentCards", currentCards);

  const handleTabChange = (tabIndex: number) => {
    setCurrentTab(tabIndex);
    setCurrentCategory(null);
  };

  return (
    <section className="flex w-full bg-white px-5 py-6 md:py-12 lg:py-[90px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-center">
        <div className="flex w-full flex-wrap items-center justify-between gap-5 pb-7">
          <div className="flex w-full flex-row flex-wrap items-center gap-3">
            {allCategories.map((category) => (
              <Button
                key={category.id}
                isActive={category.isActive}
                onClick={() => handleCategoryChange(category.name)}
              >
                {category.name}
              </Button>
            ))}
          </div>
          <div className="flex min-w-[312px] flex-row items-center gap-3 ">
            <label className="flex min-w-[100px] flex-1 text-sm font-semibold md:text-base">
              Ordenar por
            </label>
            <Select options={options} />
          </div>
        </div>
        <CardsContainer>
          {currentCards.map((card, index) => (
            <VideoCardModal key={`${card.id}-${index}`} data={card} />
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
