import React from "react";
import Image from "next/image";

interface ContactItemProps {
  iconSrc: string;
  title: string;
  description: string;
  contact: string;
}

const ContactItem: React.FC<ContactItemProps> = ({
  iconSrc,
  title,
  description,
  contact,
}) => {
  return (
    <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] bg-white p-10 ">
      <div className="relative self-center w-12 h-12">
        <Image
          src={iconSrc}
          alt={title}
          layout="fill"
          objectFit="contain"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col mt-6 w-full">
        <div className="flex flex-col w-full text-black items-center">
          <div className="text-3xl font-bold leading-tight">{title}</div>
          <p className="mt-4 text-base leading-6">{description}</p>
        </div>
        <p className="mt-6 text-base text-black items-center"> {contact}</p>
      </div>
    </div>
  );
};

export default ContactItem;
