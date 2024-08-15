import React from 'react';

interface TopImageProps {
  title: string;
  description: string;
}

export const TopImage: React.FC<TopImageProps> = ({ title, description }) => {
  return (
    <div className="flex relative flex-col flex-1 max-w-full w-[768px]">
      <h1 className="text-6xl font-bold leading-tight max-md:max-w-full max-md:text-4xl">
        {title}
      </h1>
      <p className="mt-6 text-lg leading-7 max-md:max-w-full">
        {description}
      </p>
    </div>
  );
};