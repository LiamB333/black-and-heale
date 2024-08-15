"use client";
import React, { useState } from "react";
import NavigationButton from "./NavButton";
import Testimonial from "./Testimonial";
import SliderDots from "./SliderDots";

interface TestimonialData {
  quote: string;
  authorName: string;
  authorTitle: string;
  authorImageSrc: string;
}

interface TestimonialSliderProps {
  testimonials: TestimonialData[];
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  testimonials = [],
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle case where testimonials array might be empty or undefined
  if (!testimonials.length) {
    return <div>No testimonials available.</div>; // Fallback UI
  }

  const { quote, authorName, authorTitle, authorImageSrc } =
    testimonials[activeIndex];

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="flex overflow-hidden flex-col justify-center px-16 pb-24 bg-white max-md:px-5 py-4">
      <div className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
        <NavigationButton direction="left" onClick={handlePrev} />
        <Testimonial
          quote={quote}
          authorName={authorName}
          authorTitle={authorTitle}
          authorImageSrc={authorImageSrc}
        />
        <NavigationButton direction="right" onClick={handleNext} />
      </div>
      <SliderDots count={testimonials.length} activeIndex={activeIndex} />
    </section>
  );
};

export default TestimonialSlider;
