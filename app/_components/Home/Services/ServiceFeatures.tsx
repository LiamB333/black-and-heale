import React from "react";
import Image from "next/image";

interface ServiceFeatureProps {
  text: string;
}

const ServiceFeature: React.FC<ServiceFeatureProps> = ({ text }) => {
  return (
    <div className="flex gap-4 mt-4 leading-[150%] max-md:flex-wrap">
      <div className="relative shrink-0 my-auto w-4 h-4">
        {" "}
        <Image src="/tick.svg" alt="Feature Icon" width={80} height={80} />
      </div>
      <p className="flex-1 max-md:max-w-full">{text}</p>
    </div>
  );
};

export default ServiceFeature;
