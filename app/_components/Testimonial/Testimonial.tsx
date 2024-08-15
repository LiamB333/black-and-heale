import React from "react";
import Image from "next/image";

interface TestimonialProps {
  quote: string;
  authorName: string;
  authorTitle: string;
  authorImageSrc: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  authorName,
  authorTitle,
  authorImageSrc,
}) => {
  return (
    <article className="flex overflow-hidden flex-col items-center self-stretch my-auto text-center text-black min-w-[240px] w-[768px] max-md:max-w-full">
      <div className="relative w-20 h-20 self-center rounded-full overflow-hidden">
        <Image
          src={authorImageSrc}
          alt={authorName}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
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
