import React from "react";

const ContactButton: React.FC = () => {
  return (
    <button className="flex gap-2 justify-center mt-3">
      <span>Contact Us</span>
      <img loading="lazy" alt="" className="shrink-0 w-6 aspect-square" />
    </button>
  );
};

export default ContactButton;
