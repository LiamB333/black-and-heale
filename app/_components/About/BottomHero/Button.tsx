import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({ children, variant }) => {
  const baseClasses = "gap-2 self-stretch px-6 py-3 border border-black border-solid max-md:px-5";
  const variantClasses = variant === "primary" ? "text-white bg-black" : "text-black";

  return (
    <button className={`${baseClasses} ${variantClasses}`}>
      {children}
    </button>
  );
};