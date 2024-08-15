import React from "react";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

interface HeroProps {
  title: string;
  description: string;
}

const Hero: React.FC<HeroProps> = ({ title, description }) => {
  return (
    <main className="relative flex flex-col items-start px-16 py-1 text-white min-h-[550px] max-md:px-5 overflow-hidden">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          src="/bg-18.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={80}
          priority
          className="brightness-50"
        />
      </div>
      <section className="relative z-10 mt-20 max-md:mt-10 max-w-full">
        <h1 className="text-6xl font-bold leading-[67px] w-full max-w-[560px] max-md:text-4xl max-md:leading-[54px]">
          {title}
        </h1>
        <p className="mt-6 text-lg leading-7 w-full max-w-[560px] max-md:max-w-full">
          {description}
        </p>
        <div className="flex gap-4 items-start pt-4 mt-6 text-base text-white">
          <Link href="/contact">
            <Button variant="primary">Contact Us</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Hero;
