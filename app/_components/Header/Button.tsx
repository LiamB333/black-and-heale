import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, variant }) => {
  const baseClasses = "px-6 py-3 border border-solid max-md:px-5 hover:text-[#9CAE47] hover:border-[#9CAE47]";
  const variantClasses = {
    primary: "bg-black border-black",
    secondary: "border-white"
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </button>
  );
};

export default Button;