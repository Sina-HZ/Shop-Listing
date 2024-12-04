import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode | undefined,

}

const Button = ({children}: ButtonProps) => {

    return <button >{children}</button>
}

export default Button;