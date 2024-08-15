import React from "react";

interface ServiceFeatureProps {
  text: string;
}

const ServiceFeature: React.FC<ServiceFeatureProps> = ({ text }) => {
  return (
    <div className="flex gap-4 mt-4 leading-[150%] max-md:flex-wrap">
      <img
        loading="lazy"
        alt=""
        className="shrink-0 my-auto w-4 aspect-square"
      />
      <div className="flex-1 max-md:max-w-full">{text}</div>
    </div>
  );
};

export default ServiceFeature;
