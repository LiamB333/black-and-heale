import React from "react";
import Image from "next/image";
import ContactForm from "../ContactForm/ContactForm";

const ContactPage: React.FC = () => {
  const handleSubmit = (formData: FormData) => {
    console.log(Object.fromEntries(formData));
  };

  return (
    <div className="flex overflow-hidden flex-col justify-center mt-12 px-16 py-28 bg-zinc-100 max-md:px-5 max-md:py-24">
      <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full text-black max-md:max-w-full">
            <div className="self-start text-base font-semibold text-center">
              Efficient
            </div>
            <div className="flex flex-col mt-4 w-full max-md:max-w-full">
              <h1 className="text-5xl font-bold leading-tight max-md:max-w-full max-md:text-4xl">
                Get in Touch
              </h1>
              <p className="mt-6 text-lg max-md:max-w-full">
                We&apos;re here to answer any questions you may have.
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
        <div className="relative flex-1 shrink w-full aspect-[0.84] basis-0 min-w-[240px] max-md:max-w-full">
          <Image
            src="/bg-1.jpg"
            alt="Descriptive alt text"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
