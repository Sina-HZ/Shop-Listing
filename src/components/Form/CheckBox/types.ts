import { InputHTMLAttributes } from "react";

export interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}
