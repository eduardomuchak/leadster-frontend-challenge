function GridItemContainer({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="w-full px-2 py-4 md:py-10">
      <span className="font-semibold text-zinc-500">{title}</span>
      {children}
    </div>
  );
}

export default GridItemContainer;
