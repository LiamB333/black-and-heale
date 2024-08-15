import React from "react";

interface ContactHeaderProps {
  title: string;
  description: string;
}

const ContactHeader: React.FC<ContactHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <div className="flex overflow-hidden flex-col justify-center px-16 py-28 bg-white max-md:px-5 max-md:py-24">
      <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
        <div className="flex overflow-hidden flex-col flex-1 shrink text-black basis-0 min-w-[240px] max-md:max-w-full">
          <div className="text-5xl font-bold leading-tight max-md:text-3xl">
            {title}
          </div>
          <p className="mt-6 text-lg max-md:max-w-full">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
