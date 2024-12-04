import { InputHTMLAttributes } from "react";

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

const CheckBox = ({ name, label, checked }: CheckBoxProps) => {
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type="checkbox"
        id={name}
        checked={checked}
        className="size-4"
        readOnly
      />
    </>
  );
};

export default CheckBox;
