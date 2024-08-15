import React from "react";
import Button from "./Button";
import Link from "next/link";

interface CTAProps {
  title: string;
  description: string;
}

const CTA: React.FC<CTAProps> = ({ title, description }) => {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-start px-16 py-28 bg-zinc-100 max-md:px-5 max-md:py-24">
      <div className="flex flex-col max-w-full w-[768px]">
        <div className="flex flex-col w-full text-black max-md:max-w-full">
          <h1 className="text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
            {title}
          </h1>
          <p className="mt-6 text-lg max-md:max-w-full">{description}</p>
        </div>
        <div className="flex gap-4 items-start self-start pt-4 mt-6 text-base">
          <Link href="/contact">
            <Button variant="primary">Contact</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
