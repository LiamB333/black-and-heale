import React from "react";
import Image from "next/image";
import { TopImage } from "./TopImage";

interface TopSectionProps {
  title: string;
  description: string;
  backgroundImageSrc: string;
}

export const TopSection: React.FC<TopSectionProps> = ({
  title,
  description,
  backgroundImageSrc,
}) => {
  return (
    <div className="relative flex overflow-hidden flex-col justify-center items-start px-16 py-28 text-white min-h-[369px] max-md:px-5 max-md:py-24">
      <div className="absolute inset-0 z-0">
        <Image
          loading="lazy"
          src={backgroundImageSrc}
          alt=""
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
      </div>
      <div className="relative z-10">
        <TopImage title={title} description={description} />
      </div>
    </div>
  );
};
