import React from "react";
import { Button } from "./Button";
import Link from "next/link";

interface ContentSectionProps {
  title: string;
  description: string;
  subtitle: string;
  learnMoreUrl?: string;
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  description,
  subtitle,
  learnMoreUrl,
}) => {
  return (
    <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
      <div className="flex flex-col w-full text-black max-md:max-w-full">
        <div className="self-start text-base font-semibold text-center">
          {subtitle}
        </div>
        <div className="flex flex-col mt-4 w-full max-md:max-w-full">
          <h2 className="text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-7 max-md:max-w-full">
            {description}
          </p>
        </div>
      </div>
      <div className="flex gap-6 items-center self-start pt-4 mt-6 text-base text-black">
        <Link href={learnMoreUrl || "/"}>
          <Button variant="outline">Learn More</Button>
        </Link>
        <Link href="/contact">
          <Button variant="text">Contact Us</Button>
        </Link>
      </div>
    </div>
  );
};
