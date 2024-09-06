import React from "react";
import Image from "next/image";

const ContactButton: React.FC = () => {
  return (
    <button className="flex gap-2 justify-center items-center mt-3">
      <span>Contact Us</span>
      <div className="relative w-4 h-4">
        <Image
          src="/icons/right-arrow.svg"
          alt="Contact Us Icon"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </button>
  );
};

export default ContactButton;
