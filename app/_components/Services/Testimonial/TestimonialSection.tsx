import React from "react";
import Image from "next/image";
import StarRating from "./StarRating";

interface TestimonialCardProps {
  imageSrc: string;
  rating: number;
  testimonial: string;
  author: string;
  role: string;
  companyLogo: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  imageSrc,
  rating,
  testimonial,
  author,
  role,
  companyLogo,
}) => {
  return (
    <div className="px-12">
      {" "}
      {/* Apply padding here */}
      <div className="flex flex-wrap gap-10 items-center w-full max-md:max-w-full">
        <div className="relative flex-1 shrink self-stretch my-auto w-full aspect-[0.96] basis-0 min-w-[240px] max-md:max-w-full">
          <Image
            src={imageSrc}
            alt="Testimonial illustration"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex overflow-hidden flex-col flex-1 shrink items-start self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
          <StarRating rating={rating} />
          <div className="self-stretch mt-8 text-2xl font-bold leading-9 text-black max-md:max-w-full">
            {testimonial}
          </div>
          <div className="flex gap-5 items-center mt-8 text-base text-black">
            <div className="flex flex-col self-stretch my-auto">
              <div className="font-semibold">{author}</div>
              <div>{role}</div>
            </div>
            <div className="shrink-0 self-stretch my-auto w-0 border border-black border-solid h-[61px]" />
            <div className="relative shrink-0 self-stretch my-auto aspect-[2.5] w-[140px]">
              <Image
                src={companyLogo}
                alt="Company logo"
                layout="fill"
                objectFit="contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
