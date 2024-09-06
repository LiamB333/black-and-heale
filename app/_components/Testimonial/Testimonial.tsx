import React from "react";
import Image from "next/image";

interface TestimonialProps {
  quote: string;
  authorName: string;
  authorTitle: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  authorName,
  authorTitle,
}) => {
  return (
    <article className="flex overflow-hidden flex-col items-center self-stretch my-auto text-center text-black min-w-[240px] w-[768px] max-md:max-w-full">
      <div className="relative self-center overflow-hidden">
        <Image
          src="icons/logo.svg"
          alt={authorName}
          width={240}
          height={100}
        />
      </div>
      <blockquote className="self-stretch text-2xl font-bold leading-9 mt-8 max-md:max-w-full">
        {quote}
      </blockquote>
      <footer className="flex flex-col mt-8 max-w-full text-base w-[300px] items-center">
        <div className="flex flex-col items-center mt-4 w-full">
          <cite className="font-semibold not-italic">{authorName}</cite>
          <p>{authorTitle}</p>
        </div>
      </footer>
    </article>
  );
};

export default Testimonial;
