import * as React from "react";
import Image from "next/image";

interface ContactButtonProps {
  label: string;
  imgSrc: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ label, imgSrc }) => {
  return (
    <button className="flex gap-2 justify-center items-center self-stretch my-auto">
      <span className="self-stretch my-auto">{label}</span>
      <div className="relative w-6 h-6">
        {" "}
        {/* Set width and height matching the image size */}
        <Image
          src={imgSrc}
          alt="Contact icon"
          layout="fill" // This will make the image fill the container
          objectFit="contain" // This adjusts how the image fits within the container
        />
      </div>
    </button>
  );
};

export default ContactButton;
