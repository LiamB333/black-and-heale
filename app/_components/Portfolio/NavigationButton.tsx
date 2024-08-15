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
      ? "/left-arrow.svg" // Path to left arrow image
      : "/right-arrow.svg"; // Path to right arrow image
  const altText =
    direction === "left" ? "Previous testimonial" : "Next testimonial";

  return (
    <button
      onClick={onClick}
      className="flex gap-2 justify-center items-center p-3 w-12 border border-black border-solid rounded-[50px]"
    >
      <div className="relative w-6 h-6">
        <Image src={imageSrc} alt={altText} layout="fill" objectFit="contain" />
      </div>
    </button>
  );
};

export default NavigationButton;
