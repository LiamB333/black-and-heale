import Link from "next/link";
import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col mt-20 max-w-full w-[560px] max-md:mt-10">
      <div className="flex flex-col w-full text-black max-md:max-w-full">
        <div className="text-3xl font-bold leading-tight max-md:max-w-full">
          Contact Us
        </div>
        <p className="mt-4 text-lg max-md:max-w-full">
          Still have questions? Get in touch with us.
        </p>
      </div>
      <Link href={`mailto:aaronblack1@hotmail.co.uk`}>
        <button className="gap-2 self-stretch px-6 py-3 mt-6 max-w-full text-base text-black whitespace-nowrap border border-black border-solid w-[104px] max-md:px-5 hover:border-[#9CAE47] hover:text-[#9CAE47]">
          Contact
        </button>
      </Link>
    </div>
  );
};

export default Contact;
