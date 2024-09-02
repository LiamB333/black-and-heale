import React from "react";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="px-6 py-3 border border-black border-solid hover:border-[#9CAE47] hover:text-[#9CAE47] max-md:px-5">
      {text}
    </button>
  );
};

export default Button;
