import clsx from "clsx";

interface SectionContainerProps {
  children: React.ReactNode;
  isBlueBackground?: boolean;
}

function SectionContainer({
  children,
  isBlueBackground,
}: SectionContainerProps) {
  return (
    <section
      className={clsx("flex w-full px-5 py-10 md:py-20 lg:py-40", {
        "bg-light-blue": isBlueBackground,
      })}
    >
      {children}
    </section>
  );
}

export default SectionContainer;
