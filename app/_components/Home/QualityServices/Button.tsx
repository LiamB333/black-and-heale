import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ children, variant }) => {
  const baseClasses =
    "flex gap-2 justify-center items-center self-stretch my-auto";
  const variantClasses = {
    primary:
      "px-6 py-3 text-white bg-black border border-black border-solid max-md:px-5",
    secondary: "text-black whitespace-nowrap",
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </button>
  );
};

export default Button;
