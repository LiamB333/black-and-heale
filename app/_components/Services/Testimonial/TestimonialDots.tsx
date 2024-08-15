import React from "react";

interface TestimonialDotsProps {
  count: number;
  activeIndex: number;
}

const TestimonialDots: React.FC<TestimonialDotsProps> = ({
  count,
  activeIndex,
}) => {
  return (
    <div className="flex gap-2 items-start self-stretch my-auto">
      {[...Array(count)].map((_, index) => (
        <div
          key={index}
          className={`flex shrink-0 w-2 h-2 rounded-full ${
            index === activeIndex ? "bg-black" : "bg-stone-300"
          }`}
        />
      ))}
    </div>
  );
};

export default TestimonialDots;
