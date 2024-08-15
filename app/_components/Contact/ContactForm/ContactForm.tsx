"use client";
import React from "react";
import InputField from "./InputField";
import TextArea from "./TextArea";
import Button from "./Button";

const ContactForm: React.FC = () => {
  return (
    <form className="flex flex-col mt-8 w-full text-base max-md:max-w-full">
      <InputField label="Name" name="name" />
      <InputField label="Email" name="email" type="email" />
      <TextArea
        label="Message"
        name="message"
        placeholder="Enter your message..."
      />
      <Button type="submit">Send</Button>
    </form>
  );
};

export default ContactForm;
