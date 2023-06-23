import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode;
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className="group w-fit rounded-full border border-black bg-white text-black transition-colors hover:border-primary-blue-300 disabled:opacity-80 disabled:hover:cursor-not-allowed"
      {...rest}
    >
      <span className="flex w-fit items-center justify-center px-5 py-2 text-center text-sm font-medium leading-5 transition-colors group-hover:text-primary-blue-400 lg:text-base">
        {children}
      </span>
    </button>
  );
}
