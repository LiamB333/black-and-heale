import React from "react";
import FAQItem from "./FAQItem";
import ContactSection from "./Contact";

interface FAQData {
  question: string;
  answer: string;
}

const faqData: FAQData[] = [
  {
    question: "How can I contact you?",
    answer:
      "You can contact us by phone, email, or by filling out the contact form on our website. Our contact details can be found on the Contact page.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We offer a wide range of construction services, including commercial and private projects. Our team of experienced joiners can plan and organise your job from start to finish.",
  },
  {
    question: "Do you provide free estimates?",
    answer:
      "Yes, we provide free estimates for all our services. Simply contact us with the details of your project, and we will be happy to provide you with a quote.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We provide our services in the North East. If you are unsure whether we cover your area, please contact us and we will be happy to assist you.",
  },
  {
    question: "How long have you been in business?",
    answer:
      "We have been in the construction industry for [Insert Number] years. Our team of joiners have a wealth of experience and expertise in delivering high-quality projects.",
  },
];

const FAQS: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col items-start px-16 py-28 bg-white max-md:px-5 max-md:py-24">
      <div className="flex flex-col max-w-full text-black w-[768px]">
        <div className="text-5xl font-bold leading-tight max-md:max-w-full max-md:text-4xl">
          Questions
        </div>
        <p className="mt-6 text-lg max-md:max-w-full">
          Find answers to frequently asked questions about our services and
          contact process.
        </p>
      </div>
      <div className="flex flex-col self-stretch mt-20 w-full text-black max-md:mt-10 max-md:max-w-full">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQS;
