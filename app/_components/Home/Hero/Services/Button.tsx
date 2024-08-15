import React from 'react';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="px-6 py-3 border border-black border-solid max-md:px-5">
      {text}
    </button>
  );
};

export default Button;