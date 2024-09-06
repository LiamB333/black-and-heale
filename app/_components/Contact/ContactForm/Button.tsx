import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ children, type = "button" }) => {
  return (
    <button
      type={type}
      className="gap-2 self-stretch px-6 py-3 mt-6 text-white whitespace-nowrap bg-black border border-black border-solid w-[99px] max-md:px-5 hover:bg-[#9CAE47] hover:border-[#9CAE47] hover:text-black"
    >
      {children}
    </button>
  );
};

export default Button;
