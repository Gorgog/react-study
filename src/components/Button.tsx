import  {type ButtonHTMLAttributes} from "react";
import * as React from "react";

interface Props {
    className?: string,
    type?: ButtonHTMLAttributes<HTMLButtonElement>['type'],
    children?: React.ReactNode,
    onClick?: () => void
}

const Button = ({className, type = 'button', children, onClick}: Props) => {
    return (
        <button
            className={`button ${className}`}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;