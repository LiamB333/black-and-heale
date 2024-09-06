import React from "react";
import Image from "next/image";

interface NavigationButtonProps {
  direction: "left" | "right";
  onClick: () => void;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  direction,
  onClick,
}) => {
  // Ensure these URLs are correct and point to the correct assets
  const imageSrc =
    direction === "left"
      ? "/icons/left-arrow-testimonial.svg"
      : "/icons/right-arrow-testimonial.svg";
  const altText = `Navigate ${direction}`;

  return (
    <button
      className="flex gap-2 justify-center items-center p-3 my-auto w-12 border border-black border-solid rounded-[50px]"
      aria-label={altText}
      onClick={onClick}
    >
      <div className="relative w-6 h-6">
        <Image src={imageSrc} alt={altText} layout="fill" objectFit="contain" />
      </div>
    </button>
  );
};

export default NavigationButton;
