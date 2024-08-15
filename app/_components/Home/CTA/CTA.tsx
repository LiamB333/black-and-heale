import React from "react";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

interface CTAProps {
  title: string;
  subtitle: string;
}

const CTA: React.FC<CTAProps> = ({ title, subtitle }) => {
  return (
    <section className="flex overflow-hidden relative flex-col justify-center items-start px-16 py-28 min-h-[479px] max-md:px-5 max-md:py-24">
      <div className="object-cover absolute inset-0 size-full">
        <Image
          src="/bg-3.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
          className="brightness-50"
        />
      </div>
      <div className="flex relative flex-col max-w-full w-[768px]">
        <div className="flex flex-col w-full text-white max-md:max-w-full">
          <h1 className="text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
            {title}
          </h1>
          <p className="mt-6 text-lg max-md:max-w-full">{subtitle}</p>
        </div>
        <div className="flex gap-4 items-start self-start pt-4 mt-6 text-base text-white">
          <Link href="/contact">
            <Button variant="primary">Contact</Button>
          </Link>
          <Link href="services">
            <Button variant="secondary">Learn More</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
