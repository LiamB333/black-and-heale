import React from "react";
import Image from "next/image";
import Link from "next/link";
import ServiceFeature from "./ServiceFeatures";
import Button from "./Button";
import ContactButton from "./ContactButton";

interface ServicesProps {
  bgColor: string;
  features: string[];
  title: string;
  imageSrc: string;
}

const Services: React.FC<ServicesProps> = ({
  bgColor,
  features,
  title,
  imageSrc,
}) => {
  return (
    <section
      className={`flex flex-col justify-center px-16 py-0 pb-24 ${bgColor} max-md:px-5`}
    >
      <div className="mt-8 max-md:mr-1 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:w-full">
            <div className="flex flex-col self-stretch text-base text-black max-md:mt-10 max-md:max-w-full">
              <h1 className="mt-4 text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                {title}
              </h1>
              <div className="mt-4">
                {features.map((feature, index) => (
                  <ServiceFeature key={index} text={feature} />
                ))}
              </div>
              <div className="flex gap-5 justify-between items-start self-start pt-4 mt-8 text-black">
                <Link href="services">
                  <Button text="Learn More" />
                </Link>
                <Link href="contact">
                  <ContactButton />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-6/12 max-md:w-full">
            <div className="relative w-full h-0 pb-[80%] max-md:mt-5 max-md:max-w-full">
              <Image
                src={imageSrc}
                alt="Joinery services showcase"
                layout="fill"
                objectFit="cover"
                loading="lazy"
                className="grow w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
