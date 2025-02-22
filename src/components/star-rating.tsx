"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number; // Рейтинг от 0 до 5
  maxRating?: number; // Максимальный рейтинг (по умолчанию 5)
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating = 5 }) => {
  // Round to nearest whole number
  const roundedRating = Math.round(rating);
  const totalStars = Array.from({ length: maxRating }, (_, index) => index);

  return (
    <div className="flex items-center">
      {totalStars.map((star, index) => {
        let starClass = "h-4 w-4 lg:w-2.5 h-2.5";

        if (index < roundedRating) {
          starClass += " text-[#FFC700]"; // Заполненные звезды золотым цветом
        } else {
          starClass += " text-gray-300"; // Пустые звезды
        }

        return (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            className={cn(starClass)}
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke="none"
          >
            <path d="M12 2l2.4 7.6h7.8l-6 4.8 2.4 7.6-6-4.8-6 4.8L7.8 14l-6-4.8h7.8L12 2z" />
          </svg>
        );
      })}
    </div>
  );
};

export default StarRating;
