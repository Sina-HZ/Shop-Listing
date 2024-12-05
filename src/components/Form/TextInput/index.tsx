import { InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

const TextInput = ({
  name,
  label,
  value,
  onChange,
  className,
  placeholder,
}: TextInputProps) => {
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        value={value}
        onChange={onChange}
        type="text"
        className={className}
        placeholder={placeholder}
      />
    </>
  );
};

export default TextInput;
