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
    <article className="flex flex-col items-center flex-1 shrink basis-0 min-w-[280px] max-w-[350px] mx-4">
      {/* Image container */}
      <div className="relative w-full aspect-[1.5]">
        <Image
          src={imageSrc}
          alt={serviceTitle}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Text content */}
      <div className="flex flex-col mt-6 w-full">
        <h3 className="text-3xl font-bold leading-10">{serviceTitle}</h3>
        <p className="mt-4 text-base leading-6">{serviceDescription}</p>
      </div>
    </article>
  );
};

export default ServiceCard;
