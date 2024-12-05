import { twMerge } from "tailwind-merge";
import { CheckBoxProps } from "./types";

const CheckBox = ({ name, label, checked, className }: CheckBoxProps) => {
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type="checkbox"
        id={name}
        checked={checked}
        className={twMerge("size-4", className)}
        readOnly
      />
    </>
  );
};

export default CheckBox;
