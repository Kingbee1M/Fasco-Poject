"use client";
import React from "react";
import clsx from "clsx";

interface ButtonProps {
  label?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "colors" | "prices";
  size?: "sm" | "md" | "lg" | "none";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isActive?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  color?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  label,
  onClick,
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  isActive = false,
  disabled = false,
  fullWidth = false,
  className = "",
  color,
  type = "button",
}: ButtonProps) {
  const baseStyles = `
    flex items-center justify-center gap-2 font-medium 
    transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2
  `;

  const variants = {
    primary: `
      ${isActive ? "bg-black text-white" : "bg-[var(--whiteish-bg)] text-[var(--grey-text)]"} 
      hover:bg-black hover:text-white rounded-md
    `,
    secondary: `
      bg-[var(--grey-text)] text-white hover:bg-black rounded-md
    `,
    outline: `
      border border-[var(--light-grey-text)] text-[var(--light-grey-text)]
      hover:bg-[var(--grey-text)] hover:text-white rounded-md cursor-pointer
    `,
    ghost: `
      text-[var(--grey-text)] hover:text-black hover:bg-[var(--whiteish-bg)]
    `,
    colors: `
      w-4 h-4 rounded-full cursor-pointer
    `,
    prices: `
      text-[var(--light-grey-text)]
      hover:bg-[var(--grey-text)] hover:text-white rounded-md cursor-pointer justify-start px-0
    `,
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-[14px]",
    lg: "px-6 py-3 text-base",
    none: "text-sm",
  };


  const variantStyle =
    variant === "colors" && color ? { backgroundColor: color } : {};

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        baseStyles,
        variants[variant],
        variant !== "colors" && sizes[size],
        fullWidth && "w-full",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      style={variantStyle}
    >
      {leftIcon && <span className="text-lg">{leftIcon}</span>}
      {label}
      {rightIcon && <span className="text-lg">{rightIcon}</span>}
    </button>
  );
}