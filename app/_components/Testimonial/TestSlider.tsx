import React from "react";
import Image from "next/image";

interface TestimonialProps {
  logoSrc: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  authorImageSrc: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  logoSrc,
  quote,
  authorName,
  authorTitle,
  authorImageSrc,
}) => {
  return (
    <article className="flex overflow-hidden flex-col items-center self-stretch my-auto text-center text-black min-w-[240px] w-[768px] max-md:max-w-full">
      <div className="relative w-[140px] h-[56px]"> {/* Adjust the height accordingly to maintain aspect ratio */}
        <Image
          src={logoSrc}
          alt="Company logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <blockquote className="self-stretch mt-8 text-2xl font-bold leading-9 max-md:max-w-full">
        {quote}
      </blockquote>
      <footer className="flex flex-col mt-8 max-w-full text-base w-[300px]">
        <div className="relative w-14 h-14 self-center"> {/* Width and height should match the container size */}
          <Image
            src={authorImageSrc}
            alt={authorName}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col items-start mt-4 w-full">
          <cite className="font-semibold not-italic">{authorName}</cite>
          <p>{authorTitle}</p>
        </div>
      </footer>
    </article>
  );
};

export default Testimonial;
