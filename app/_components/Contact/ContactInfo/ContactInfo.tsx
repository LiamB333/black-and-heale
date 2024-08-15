import React from "react";
import ContactItem from "./ContactItem";

const contactData = [
  {
    iconSrc: "icons/mail-green.svg",
    title: "Email",
    description:
      "Please feel free to reach out to us with any questions or inquiries.",
    contact: "aaronblack1@hotmail.com",
  },
  {
    iconSrc: "icons/telephone-green.svg",
    title: "Phone",
    description: "We're here to help and provide top-notch service.",
    contact: "07768 437002",
  },
  {
    iconSrc: "icons/location-green.svg",
    title: "Office",
    description:
      "Don't hesitate to contact us for all your construction needs.",
    contact: "To add",
  },
];

const ContactInfo: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col justify-center px-16 text-center bg-white max-md:px-5 max-md:py-10">
      <div className="flex flex-wrap gap-10 items-center w-full max-md:max-w-full">
        {contactData.map((item, index) => (
          <ContactItem
            key={index}
            iconSrc={item.iconSrc}
            title={item.title}
            description={item.description}
            contact={item.contact}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
