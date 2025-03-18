import React from 'react';

import Star, { StarSize } from '@/components/Star';

type StarRatingProps = {
  rating: number;
  size?: StarSize;
  isInput?: boolean;
  hoverRating?: number;
  setRating?: (rating: number) => void;
  setHoverRating?: (hoverRating: number) => void;
};

const StarRating = ({
  rating,
  size = 'm',
  isInput = false,
  hoverRating = 0,
  setRating,
  setHoverRating,
}: StarRatingProps) => {
  const handleClick = (incomingRating: number) => {
    if (!setRating || !setHoverRating) return;
    if (rating === incomingRating) setRating(0);
    else {
      setRating(incomingRating);
      setHoverRating(0);
    }
  };

  const stars = [];
  for (let i = 1; i < 6; i++) {
    const inputProps =
      isInput && setRating && setHoverRating
        ? {
            onMouseEnter: () => setHoverRating(i),
            onMouseLeave: () => setHoverRating(0),
            onClick: () => handleClick(i),
          }
        : {};
    stars.push(
      <Star
        starId={i}
        marked={hoverRating === 0 && i <= rating}
        hovered={i <= hoverRating}
        isInput={isInput}
        size={size}
        {...inputProps}
      />,
    );
  }

  return <div className="flex">{stars}</div>;
};

StarRating.displayName = 'StarRating';
export default StarRating;
