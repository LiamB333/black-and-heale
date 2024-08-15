import React from "react";
import Image from "next/image";
import  { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import { FeatureCard } from "./FeatureCard";

interface MilestonesSectionProps {
  title: string;
  description: string;
  features: Array<{
    title: string;
    description: string;
  }>;
  imageSrc: string;
  colour: string;
}

export const MilestonesSection: React.FC<MilestonesSectionProps> = ({
  title,
  description,
  features,
  imageSrc,
  colour,
}) => {
  return (
    <section
      className="flex overflow-hidden flex-col justify-center px-12 py-20 text-black max-md:px-4 max-md:py-16"
      style={{ backgroundColor: colour }} // Apply the color dynamically
    >
      <div className="flex flex-wrap gap-8 items-center w-full max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <Heading>{title}</Heading>
            <Paragraph>{description}</Paragraph>
          </div>
          <div className="flex flex-wrap gap-4 items-start py-2 mt-6 w-full max-md:max-w-full">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
        <div className="flex-1 p-2">
          <Image
            loading="lazy"
            src={imageSrc}
            alt="Company milestones and achievements"
            layout="responsive"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};
