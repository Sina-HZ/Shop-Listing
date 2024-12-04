import { InputHTMLAttributes } from "react";

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

const CheckBox = ({ name, label, onChange, checked }: CheckBoxProps) => {
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type="checkbox"
        id={name}
        onChange={onChange}
        checked={checked}
      />
    </>
  );
};

export default CheckBox;
