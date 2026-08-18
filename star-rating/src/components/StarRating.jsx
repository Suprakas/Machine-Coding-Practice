import { useState } from "react";

export default function StarRating({ totalStars = 15 }) {
  const stars = Array.from({ length: totalStars }, (_, index) => index + 1);

  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleRating = (star) => {
    setRating((prevRating) => (prevRating === star ? 0 : star));
  };

  const handleHoverRating = (star) => {
    setHoverRating(star);
  };

  const displayRating = hoverRating > 0 ? hoverRating : rating;

  console.log("rating: ", rating);
  console.log("hover rating", hoverRating);

  return (
    <>
      {stars.map((star) => {
        return (
          <button
            key={star}
            onClick={() => handleRating(star)}
            onMouseEnter={() => handleHoverRating(star)}
            onMouseLeave={() => handleHoverRating(0)}
          >
            {star <= displayRating ? "★" : "☆"}
          </button>
        );
      })}
      <p>
        {rating}/{totalStars}
      </p>
    </>
  );
}
