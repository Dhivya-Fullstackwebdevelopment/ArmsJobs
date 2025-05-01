import React, { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    buttonTitle: string;
    buttonType?: "submit" | "reset" | "button"; // Restrict buttonType to allowed values;
    icon?: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    buttonTitle,
    buttonType = "submit", // Default to "submit"
    icon,
    className,
    ...rest // Spread the rest of the props
}) => {
    return (
        <div>
            <button
            className={`flex items-center gap-2 ${className}`}
                type={buttonType}
                {...rest}  // Spread the rest props to ensure all standard input props are passed down
            >
                {icon}
                {buttonTitle}
            </button>
        </div>
    )
}
