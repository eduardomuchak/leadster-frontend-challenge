import clsx from "clsx";

interface PaginateCardsProps {
  pageCount: number;
  currentTab: number;
  handleTabChange: (tabIndex: number) => void;
}

function PaginateCards({
  pageCount,
  currentTab,
  handleTabChange,
}: PaginateCardsProps) {
  return (
    <div className="flex flex-row items-center justify-center gap-4 pt-6">
      <span className="font-bold">Página</span>
      <ul className="flex w-full flex-wrap items-center justify-center gap-2">
        {Array.from({ length: pageCount }).map((_, index) => (
          <li
            key={index}
            onClick={() => handleTabChange(index)}
            className={clsx(
              "group flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg transition-all hover:bg-primary-blue-300",
              {
                "border-2 border-primary-blue-300": index === currentTab,
              }
            )}
            data-cy="page-tab"
          >
            <span
              className={clsx(
                "font-bold text-black transition-all group-hover:text-white",
                {
                  " text-primary-blue-300": index === currentTab,
                }
              )}
            >
              {index + 1}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PaginateCards;
