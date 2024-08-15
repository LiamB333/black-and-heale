import React from "react";

interface SliderDotsProps {
  count: number;
  activeIndex: number;
}

const SliderDots: React.FC<SliderDotsProps> = ({ count, activeIndex }) => {
  return (
    <nav
      className="flex gap-2.5 items-start self-center p-2.5 mt-12 max-md:mt-10"
      aria-label="Testimonial navigation"
    >
      {Array.from({ length: count }, (_, index) => (
        <button
          key={index}
          className={`flex shrink-0 w-2 h-2 rounded-full ${
            index === activeIndex ? "bg-black" : "bg-stone-300"
          }`}
          aria-current={index === activeIndex ? "true" : "false"}
          aria-label={`Go to testimonial ${index + 1}`}
        />
      ))}
    </nav>
  );
};

export default SliderDots;
