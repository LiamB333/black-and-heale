import Link from "next/link";
import React from "react";
import Image from 'next/image';

const SocialIcons: React.FC = () => {
  return (
    <div className="flex gap-3 items-start mt-6 max-md:mt-4 max-md:justify-center">
      <Link href="https://www.facebook.com/blackjoinery/" aria-label="Facebook">
        <Image
          src="/icons/facebook.svg"
          width={24}    
          height={24}   
          alt="Facebook"
        />
      </Link>
      <Link href="https://www.linkedin.com/" aria-label="LinkedIn">
        <Image
          src="/icons/linkedin.svg"
          width={24}  
          height={24}  
          alt="LinkedIn"
        />
      </Link>
    </div>
  );
};

export default SocialIcons;
