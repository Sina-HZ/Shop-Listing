import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | undefined;
}

const IconButton = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button
      className={twMerge("rounded-full bg-transparent p-2", className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
