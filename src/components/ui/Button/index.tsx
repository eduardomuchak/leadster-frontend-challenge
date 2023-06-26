import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode;
  isActive: boolean;
}

function Button({ children, isActive, ...rest }: ButtonProps) {
  return (
    <button
      className={clsx(
        "group w-fit rounded-full border transition-colors disabled:opacity-80 disabled:hover:cursor-not-allowed",
        {
          "border-primary-blue-300 bg-primary-blue-300 text-white hover:bg-primary-blue-400":
            isActive,
          "border-black bg-white text-black hover:border-primary-blue-300":
            !isActive,
        }
      )}
      {...rest}
    >
      <span
        className={clsx(
          "flex w-fit items-center justify-center px-5 py-2 text-center text-sm font-medium leading-5 transition-colors lg:text-base",
          {
            "text-white": isActive,
            "group-hover:text-primary-blue-400": !isActive,
          }
        )}
      >
        {children}
      </span>
    </button>
  );
}

export default Button;
