import React from 'react';

interface ContactInfoProps {
  address: string;
  phone: string;
  email: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ address, phone, email }) => {
  return (
    <>
      <div className="flex flex-col w-full text-sm text-black max-md:max-w-full max-md:items-center mt-6">
        <div className="font-semibold max-md:max-w-full max-md:text-center">Address:</div>
        <div className="mt-1 max-md:max-w-full max-md:text-center">{address}</div>
      </div>
      <div className="flex flex-col mt-6 w-full text-sm max-md:max-w-full max-md:items-center">
        <div className="font-semibold text-black max-md:max-w-full max-md:text-center">
          Contact:
        </div>
        <div className="flex flex-col mt-1 w-full text-black max-md:max-w-full max-md:items-center">
          <a href={`tel:${phone}`} className="max-md:max-w-full max-md:text-center">{phone}</a>
          <a href={`mailto:${email}`} className="max-md:max-w-full max-md:text-center">{email}</a>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
