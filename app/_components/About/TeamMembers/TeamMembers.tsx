import React from "react";
import Image from "next/image";

interface TeamMemberProps {
  imageSrc: string;
  name: string;
  title: string;
  description: string;
  socialIcons: string[];
}

const TeamMember: React.FC<TeamMemberProps> = ({
  imageSrc,
  name,
  title,
  description,
  socialIcons,
}) => {
  return (
    <div className="flex flex-col flex-1 shrink items-center basis-0 min-w-[240px] max-w-full mx-auto py-28">
      <div className="relative w-20 h-20">
        <Image
          src={imageSrc}
          alt={`${name}, ${title}`}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col self-stretch mt-6 w-full text-center text-black">
        <div className="flex flex-col w-full">
          <div className="text-xl font-semibold">{name}</div>
          <div className="text-lg">{title}</div>
        </div>
        <div className="mt-4 text-base leading-6">{description}</div>
      </div>
      <div className="flex gap-3.5 items-start mt-6">
        {socialIcons.map((icon, index) => (
          <div key={index} className="relative w-6 h-6">
            <Image
              src={icon}
              alt=""
              layout="fill"
              objectFit="contain"
              className="shrink-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
