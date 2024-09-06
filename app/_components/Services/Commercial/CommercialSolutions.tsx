import React from "react";
import Image from "next/image";
import { ContentSection } from "./ContentSection";

interface CommercialSolutionsProps {
  imageSrc: string;
  title: string;
  description: string;
  bgColor?: string;
  learnMoreUrl?: string;
  isInverted?: boolean;
}

export const CommercialSolutions: React.FC<CommercialSolutionsProps> = ({
  title,
  description,
  imageSrc,
  bgColor = "bg-white",
  learnMoreUrl,
  isInverted = false,
}) => {
  return (
    <div
      className={`flex overflow-hidden flex-col justify-center px-16 max-md:px-5 max-md:py-24 ${bgColor}`}
    >
      <div
        className={`flex flex-wrap gap-10 items-center w-full max-md:max-w-full ${
          isInverted ? "flex-row-reverse" : ""
        }`}
      >
        {/* Conditionally render text and image positions */}
        <ContentSection
          title={title}
          description={description}
          learnMoreUrl={learnMoreUrl}
        />
        <div className="relative flex-1 shrink self-stretch my-auto w-full aspect-[0.96] basis-0 min-w-[240px] max-md:max-w-full">
          <Image
            src={imageSrc}
            alt="Custom joinery project showcase"
            layout="fill"
            objectFit="contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};
