import Image from "next/image";
import React from "react";
import ContactInfo from "../Contact/ContactInfo/ContactInfo";

interface ContactHeaderProps {
  title: string;
  description: string;
}

const ContactHeader: React.FC<ContactHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <div className="relative overflow-hidden justify-center px-16 pb-10 bg-white max-md:px-5 min-h-screen">
      <div className="absolute inset-0">
        <Image
          src="/contact/contact-hero.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="brightness-50"
          priority
        />
      </div>

      <div className="relative py-24 z-10">
        <div className="flex flex-col flex-1 text-white ">
          <div className="text-5xl font-bold leading-tight max-md:text-3xl">
            {title}
          </div>
          <p className="mt-6 text-lg max-md:max-w-full">{description}</p>
        </div>
      </div>
      <ContactInfo />
    </div>
  );
};

export default ContactHeader;
