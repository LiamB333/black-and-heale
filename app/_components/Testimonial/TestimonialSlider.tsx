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
    <section className="flex flex-col justify-center items-center px-16 pb-24 bg-white max-md:px-5 pt-24">
      {/* Testimonial and Navigation Buttons for larger screens */}
      <div className="flex gap-10 justify-between items-center w-full max-md:hidden">
        <NavigationButton direction="left" onClick={handlePrev} />
        <Testimonial
          quote={quote}
          authorName={authorName}
          authorTitle={authorTitle}
          authorImageSrc={authorImageSrc}
        />
        <NavigationButton direction="right" onClick={handleNext} />
      </div>

      {/* Testimonial with buttons underneath for smaller screens */}
      <div className="hidden max-md:flex flex-col items-center w-full">
        <Testimonial
          quote={quote}
          authorName={authorName}
          authorTitle={authorTitle}
          authorImageSrc={authorImageSrc}
        />
        <div className="flex gap-4 justify-center mt-6">
          <NavigationButton direction="left" onClick={handlePrev} />
          <NavigationButton direction="right" onClick={handleNext} />
        </div>
      </div>

      <SliderDots count={testimonials.length} activeIndex={activeIndex} />
    </section>
  );
};

export default TestimonialSlider;
