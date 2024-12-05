import { twMerge } from "tailwind-merge";
import { IconButtonProps } from "./types";

const IconButton = ({ children, className, onClick }: IconButtonProps) => {
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
