import * as React from "react";
import FormButton from "./FormButton";
import ContactButton from "./ContactButton";
import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, description }) => {
  return (
    <div className="flex overflow-hidden flex-col justify-center px-16 py-28 bg-white max-md:px-5 max-md:py-24">
      <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
        <div className="flex overflow-hidden flex-col flex-1 shrink text-black basis-0 min-w-[240px] max-md:max-w-full">
          <div className="text-base font-semibold max-md:max-w-full">
            {title}
          </div>
          <div className="mt-4 text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
            {subtitle}
          </div>
        </div>
        <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
          <div className="text-lg leading-7 text-black max-md:max-w-full">
            {description}
          </div>
          <div className="flex gap-6 items-center self-start pt-4 mt-6 text-base text-black">
            <Link href="/services">
              <FormButton label="Learn More" />
            </Link>
            <Link href="/contact">
              <ContactButton label="Contact Us" imgSrc="/right-arrow.svg" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
