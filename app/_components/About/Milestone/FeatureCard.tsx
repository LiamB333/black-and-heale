import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
      <h3 className="text-xl font-bold leading-snug">{title}</h3>
      <p className="mt-4 text-base leading-6">{description}</p>
    </div>
  );
};