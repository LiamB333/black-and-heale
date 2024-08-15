import React from "react";
import Image from "next/image";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const filledStarSrc = "/star.svg";

  return (
    <div className="flex overflow-hidden gap-1 items-start">
      {[...Array(rating)].map((_, index) => (
        <div key={index} className="relative w-5 h-5">
          <Image
            src={filledStarSrc}
            alt="Filled star"
            layout="fill"
            objectFit="contain"
          />
        </div>
      ))}
    </div>
  );
};

export default StarRating;
