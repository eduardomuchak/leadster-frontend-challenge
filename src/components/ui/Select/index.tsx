interface Option {
  value: number;
  label: string;
}

interface SelectProps {
  options: Option[];
}

function Select({ options }: SelectProps) {
  return (
    <select className="custom-select group h-10 w-full min-w-[192px] rounded-xl border border-black bg-white px-4 text-center text-sm font-medium text-black transition-all hover:border-primary-blue-300 hover:text-primary-blue-300 disabled:opacity-80 disabled:hover:cursor-not-allowed lg:text-base">
      {options
        .sort((a, b) => a.value - b.value)
        .map((option, index) => (
          <option
            key={`${index}-${option}`}
            value={option.value}
            className="text-start text-sm font-medium group-hover:text-black lg:text-base"
          >
            {option.label}
          </option>
        ))}
    </select>
  );
}

export default Select;
