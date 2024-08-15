import React from "react";

interface HeadingProps {
  title: string;
  description: string;
}

const Heading: React.FC<HeadingProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col max-w-screen-md text-center text-black mx-auto mt-12">
      <div className="flex flex-col mt-4 w-full max-md:max-w-full">
        <div className="text-5xl font-bold leading-tight max-md:max-w-full max-md:text-4xl">
          {title}
        </div>
        <div className="mt-6 text-lg max-md:max-w-full">{description}</div>
      </div>
    </div>
  );
};

export default Heading;
