"use client"
import React from "react"

interface ButtonProps {
  label: string
  onClick?: () => void
  isActive?: boolean 
  variant?: "primary" | "secondary"
  className?: string
}

export default function Button({ label, onClick, variant = "primary", isActive = false, className = "" }: ButtonProps) {
  const baseStyles = "px-6 py-2 rounded-md font-medium transition-all duration-300"
  const variants = {
    primary: `text-[14px] w-auto px-4 py-2 ${
      isActive
      ? "bg-black text-white hover:bg-[var(--grey-text)]"
      : "bg-[var(--whiteish-bg)] text-[var(--grey-text)]"
    }`,
    secondary: "bg-black text-white hover:bg-[var(--grey-text)] px-6 py-2 rounded-md font-medium transition-all duration-300",
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {label}
    </button>
  )
}