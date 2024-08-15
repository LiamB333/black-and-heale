import React from "react";
import Image from "next/image";
import SocialIcons from "./SocialIcons";
import FooterLinks from "./FooterLinks";
import ContactInfo from "./ContactInfo";

interface FooterProps {
  address: string;
  phone: string;
  email: string;
}

const Footer: React.FC<FooterProps> = ({ address, phone, email }) => {
  return (
    <footer className="flex flex-col px-16 py-20 bg-white max-md:px-5">
      <div className="flex flex-wrap gap-10 w-full max-md:flex-col max-md:items-center">
        <div className="flex flex-col min-w-[240px] max-md:w-full items-start max-md:items-center">
          <div className="flex flex-col w-full items-start max-md:items-center">
            <div className="flex justify-center max-md:justify-center">
              <Image
                src="/logo.svg"
                alt="Grip Gear logo"
                width={220}
                height={60}
              />
            </div>
            <ContactInfo address={address} phone={phone} email={email} />
            <SocialIcons />
          </div>
        </div>
        <div className="flex-1 flex justify-end max-md:w-full max-md:justify-center">
          <FooterLinks />
        </div>
      </div>
      <div className="flex flex-col mt-20 w-full text-sm max-md:mt-10 max-md:max-w-full">
        <hr className="w-full bg-black border-black border-solid" />
        <div className="flex flex-wrap justify-between items-center mt-8 w-full max-md:flex-col max-md:items-center">
          <div className="text-black max-md:text-center">
            © 2024 Black & Heale. All rights reserved.
          </div>
          <div className="flex gap-6 items-center text-black max-md:flex-col max-md:mt-4">
            <a href="#" className="underline">
              Privacy Policy
            </a>
            <a href="#" className="underline">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
