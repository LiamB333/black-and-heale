import React from 'react';

interface ParagraphProps {
  children: React.ReactNode;
}

export const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
  return (
    <p className="mt-6 text-lg leading-7 max-md:max-w-full">
      {children}
    </p>
  );
};