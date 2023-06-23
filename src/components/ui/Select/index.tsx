interface Option {
  value: number;
  label: string;
}

interface SelectProps {
  options: Option[];
}

function Select({ options }: SelectProps) {
  return (
    <select className="custom-select h-10 w-full min-w-[192px] rounded-xl border border-black bg-white px-4 text-center text-base font-medium text-black">
      {options.map((option, index) => (
        <option
          key={`${index}-${option}`}
          selected={index === 0}
          value={option.value}
          className="text-start text-base font-medium"
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
