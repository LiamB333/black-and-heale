import React from "react";
import Image from "next/image";
import { ContentSection } from "./ContentSection";

interface BottomHeroProps {
  title: string;
  description: string;
  imageSrc: string;
}

export const BottomHero: React.FC<BottomHeroProps> = ({ title, description, imageSrc }) => {
  return (
    <section className="flex overflow-hidden flex-col justify-center px-16 py-28 bg-white max-md:px-5 max-md:py-24">
      <div className="flex overflow-hidden flex-wrap items-center w-full border border-black border-solid max-md:max-w-full">
        <ContentSection
          title={title}
          description={description}
        />
        <div className="flex-1 shrink self-stretch my-auto w-full aspect-[1.5] basis-24 min-w-[240px] max-md:max-w-full p-12">
          <Image
            loading="lazy"
            src={imageSrc}
            alt="Expert joiners at work"
            layout="responsive"
            width={500}
            height={300}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};
