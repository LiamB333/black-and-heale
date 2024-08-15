import React from "react";
import Image from "next/image";

interface ServiceFeatureProps {
  iconSrc: string;
  title: string;
  description: string;
}

const ServiceFeature: React.FC<ServiceFeatureProps> = ({
  iconSrc,
  title,
  description,
}) => {
  return (
    <article className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
      <Image
        src={iconSrc}
        alt={title}
        width={46}
        height={46}
        className="object-contain self-center w-12 aspect-square"
      />
      <div className="flex flex-col mt-6 w-full">
        <h3 className="text-3xl font-bold leading-tight">{title}</h3>
        <p className="mt-6 text-base leading-6">{description}</p>
      </div>
    </article>
  );
};

export default ServiceFeature;
