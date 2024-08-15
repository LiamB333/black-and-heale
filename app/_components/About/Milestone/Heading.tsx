import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({ children }) => {
  return (
    <h2 className="text-4xl font-bold leading-10 max-md:max-w-full">
      {children}
    </h2>
  );
};