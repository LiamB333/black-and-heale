import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ButtonProps {
  children: React.ReactNode;
  variant: "outline" | "text";
  icon?: string;
  onClick?: () => void;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  icon,
  onClick,
  href,
}) => {
  const baseClasses =
    "flex gap-2 justify-center items-center self-stretch my-auto";
  const variantClasses = {
    outline: "px-6 py-3 border border-black border-solid max-md:px-5",
    text: "",
  };

  const buttonContent = (
    <>
      {children}
      {icon && (
        <div className="relative w-6 h-6">
          <Image
            src={icon}
            alt="Right Arrow"
            layout="fill"
            objectFit="contain"
          />
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} passHref>
        <a
          className={`${baseClasses} ${variantClasses[variant]}`}
          onClick={onClick}
        >
          {buttonContent}
        </a>
      </Link>
    );
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {buttonContent}
    </button>
  );
};
