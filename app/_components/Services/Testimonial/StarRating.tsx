import React from "react";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div className="flex overflow-hidden gap-1 items-start">
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          loading="lazy"
          alt={index < rating ? "Filled star" : "Empty star"}
          className="object-contain shrink-0 w-5 aspect-[1.05]"
        />
      ))}
    </div>
  );
};
{
  /* Star svg */
}
export default StarRating;
