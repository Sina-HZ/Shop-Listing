import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | undefined;
}

const IconButton = ({ children, className = "", onClick }: ButtonProps) => {
  return (
    <button
      className={`rounded-full bg-transparent p-2 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
