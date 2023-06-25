function CardsContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full flex-row flex-wrap items-center justify-center gap-7 border-y-2 border-gray-bd py-20">
      {children}
    </div>
  );
}

export default CardsContainer;
