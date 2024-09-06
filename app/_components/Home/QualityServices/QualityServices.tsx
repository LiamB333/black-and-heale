import React from "react";
import ServiceCard from "./ServiceCard";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image";

interface QualityServicesProps {
  title: string;
  paragraph: string;
}

interface ServiceData {
  imageSrc: string;
  serviceTitle: string;
  serviceDescription: string;
}

const services: ServiceData[] = [
  {
    imageSrc: "/home/home-quality-1.jpg",
    serviceTitle: "Commercial Construction Services",
    serviceDescription:
      "We specialise in providing top-notch construction solutions for commercial projects of all sizes.",
  },
  {
    imageSrc: "/home/home-quality-2.jpg",
    serviceTitle: "Residential Construction Services",
    serviceDescription:
      "From small renovations to custom home builds, we have the expertise to bring your vision to life.",
  },
  {
    imageSrc: "/home/home-quality-3.jpg",
    serviceTitle: "Project Management Services",
    serviceDescription:
      "Let us take care of the logistics and coordination, ensuring a smooth and successful project.",
  },
];

const QualityServices: React.FC<QualityServicesProps> = ({
  title,
  paragraph,
}) => {
  return (
    <main className="flex flex-col justify-center px-16 py-24 bg-white max-md:px-5 max-md:py-24">
      {/* Title and Paragraph Section */}
      <section className="flex flex-wrap gap-10 items-start w-full text-black max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
          <h1 className="text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
            {title}
          </h1>
        </div>
        <p className="flex-1 shrink text-lg leading-7 basis-0 max-md:max-w-full">
          {paragraph}
        </p>
      </section>

      {/* Services Section */}
      <section className="flex flex-col mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-center items-start w-full text-black max-md:max-w-full">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Buttons Section */}
        <div className="flex gap-6 items-center self-start pt-4 mt-12 text-base max-md:mt-10">
          <Link href="/services">
            <Button variant="primary">Learn More</Button>
          </Link>
          <Link href="/contact">
            <Button variant="secondary">
              Contact
              <Image
                src="/icons/right-arrow.svg"
                alt="Contact Us Icon"
                height={20}
                width={20}
              />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default QualityServices;
