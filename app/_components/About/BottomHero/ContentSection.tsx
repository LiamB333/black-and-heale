import React from "react";
import { Button } from "./Button";
import Link from "next/link";

interface ContentSectionProps {
  title: string;
  description: string;
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  description,
}) => {
  return (
    <div className="flex flex-col flex-1 shrink justify-center self-stretch p-12 my-auto basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full text-black max-md:max-w-full">
        <h1 className="text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
          {title}
        </h1>
        <p className="mt-6 text-lg leading-7 max-md:max-w-full">
          {description}
        </p>
      </div>
      <div className="flex gap-4 items-start self-start pt-4 mt-6 text-base">
        <Link href="/contact">
          <Button variant="primary">Contact</Button>
        </Link>
        <Link href="servics">
          <Button variant="secondary">Learn More</Button>
        </Link>
      </div>
    </div>
  );
};
