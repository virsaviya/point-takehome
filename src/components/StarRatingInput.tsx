import React from 'react';

import StarRating from './StarRating';

const StarRatingInput = () => {
  const [rating, setRating] = React.useState<number>(0);
  const [hoverRating, setHoverRating] = React.useState<number>(0);

  return (
    <section className="flex flex-col items-center">
      <StarRating
        rating={rating}
        isInput={true}
        size="l"
        setRating={setRating}
        hoverRating={hoverRating}
        setHoverRating={setHoverRating}
      />
      <input
        type="submit"
        className="mt-10 h-10 px-6 font-semibold rounded-md bg-black text-white"
        value="Submit review"
      />
    </section>
  );
};

StarRatingInput.displayName = 'StarRatingInput';
export default StarRatingInput;
