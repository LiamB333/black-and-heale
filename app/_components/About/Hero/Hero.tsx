import * as React from "react";
import FormButton from "./FormButton";
import Link from "next/link";
import Image from "next/image";

interface HeroProps {
  title: string;
  description: string;
  imageSrc: string;
}

const Hero: React.FC<HeroProps> = ({ title, description, imageSrc }) => {
  return (
    <div className="relative px-16 py-24">
      <div className="absolute inset-0 max-h-[800px] md:max-h[400px]">
        <Image
          src={imageSrc}
          alt={imageSrc}
          layout="fill"
          objectFit="cover"
          quality={100}
          className="brightness-50 object-bottom"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
        <div className="flex overflow-hidden flex-col flex-1 shrink text-white basis-0 min-w-[240px] max-md:max-w-full">
          <div className="text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
            {title}
          </div>
        </div>
        <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
          <p className="text-lg leading-7 text-white max-md:max-w-full">
            {description}
          </p>
          <div className="flex gap-6 items-center self-start pt-4 mt-6 text-base text-white">
            <Link href="/services">
              <FormButton label="Our Services" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
