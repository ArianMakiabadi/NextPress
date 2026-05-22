import React, { ButtonHTMLAttributes, ReactNode } from "react";

const btnType = {
  primary: "btn--primary",
  secondary: "btn--secondary",
  outline: "btn--outline",
  danger: "btn--danger",
} as const;

type ButtonVariant = keyof typeof btnType;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`btn ${btnType[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
