"use client";
import React, { useState } from "react";
import Image from "next/image";
import Dots from "./Dots";
import NavigationButton from "./NavigationButton";

type Portfolio = {
  image: string;
  text: string;
  author: string;
  role: string;
  logo: string;
};

interface PortfolioProps {
  portfolio: Portfolio[];
}

const Portfolio: React.FC<PortfolioProps> = ({ portfolio }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNavigation = (direction: "left" | "right") => {
    if (direction === "left") {
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : portfolio.length - 1));
    } else {
      setActiveIndex((prev) => (prev < portfolio.length - 1 ? prev + 1 : 0));
    }
  };

  const { image, text, author, role, logo } = portfolio[activeIndex];

  return (
    <div className="flex overflow-hidden flex-col px-16 py-8 bg-white max-md:px-5 max-md:py-8">
      <div className="flex flex-wrap gap-10 items-center w-full max-md:max-w-full">
        <div className="flex-1 shrink self-stretch">
          <Image
            src={image}
            alt="Testimonial illustration"
            layout="responsive"
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="flex overflow-hidden flex-col flex-1 shrink items-start self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
          <div className="self-stretch text-2xl font-bold leading-9 text-black max-md:max-w-full">
            {text}
          </div>
          <div className="flex gap-5 items-center mt-8 text-base text-black">
            <div className="flex flex-col self-stretch my-auto">
              <div className="font-semibold">{author}</div>
              <div>{role}</div>
            </div>
            <div className="shrink-0 self-stretch my-auto w-0 border border-black border-solid h-[61px]" />
            <div className="p-5 aspect-[2.5] w-[200px]">
              <Image
                src={logo}
                alt="Company logo"
                layout="responsive"
                width={140}
                height={56}
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center w-full max-md:max-w-full mt-0">
        <Dots count={portfolio.length} activeIndex={activeIndex} />
        <div className="flex gap-4 items-start self-stretch my-auto">
          <NavigationButton
            direction="left"
            onClick={() => handleNavigation("left")}
          />
          <NavigationButton
            direction="right"
            onClick={() => handleNavigation("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
