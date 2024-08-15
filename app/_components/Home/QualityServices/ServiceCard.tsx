import React from "react";
import Image from "next/image";

interface ServiceCardProps {
  imageSrc: string;
  serviceTitle: string;
  serviceDescription: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  serviceTitle,
  serviceDescription,
}) => {
  return (
    <article className="flex overflow-hidden flex-col flex-1 shrink basis-0 min-w-[240px]">
      <div className="relative w-full aspect-[1.69]">
        <Image
          src={imageSrc}
          alt={serviceTitle}
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <div className="flex flex-col mt-8 w-full">
        <h3 className="text-3xl font-bold leading-10">{serviceTitle}</h3>
        <p className="mt-6 text-base leading-6">{serviceDescription}</p>
      </div>
    </article>
  );
};

export default ServiceCard;
