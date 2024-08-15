import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, variant }) => {
  const baseClasses = "gap-2 self-stretch px-6 py-3 max-md:px-5";
  const variantClasses = {
    primary: "whitespace-nowrap bg-black border border-black border-solid",
    secondary: "border border-white border-solid"
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </button>
  );
};

export default Button;