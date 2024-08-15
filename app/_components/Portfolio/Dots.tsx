import React from "react";

interface DotsProps {
  count: number;
  activeIndex: number;
}

const Dots: React.FC<DotsProps> = ({ count, activeIndex }) => {
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

export default Dots;
