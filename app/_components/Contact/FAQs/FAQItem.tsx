import React from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  return (
    <div className="flex flex-col w-full max-md:max-w-full">
      <div className="flex overflow-hidden flex-wrap gap-6 items-center py-5 w-full text-lg font-bold border-t border-black max-md:max-w-full">
        <div className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
          {question}
        </div>
      </div>
      <p className="gap-4 pb-6 w-full text-base leading-6 max-md:max-w-full">
        {answer}
      </p>
    </div>
  );
};

export default FAQItem;
