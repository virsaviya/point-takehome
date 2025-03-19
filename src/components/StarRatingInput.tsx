import React from 'react';

import Review from '@/data/Review';
import StarRating from './StarRating';

const StarRatingInput = () => {
  const [rating, setRating] = React.useState<number>(0);
  const [hoverRating, setHoverRating] = React.useState<number>(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = e.currentTarget.elements;
    const newReview: Omit<Review, 'id'> = {
      rating: Number((formData.namedItem('rating') as HTMLInputElement)?.value),
      author: (formData.namedItem('author') as HTMLInputElement)?.value,
      review: (formData.namedItem('review') as HTMLInputElement)?.value || null,
    };

    postReview(newReview);
  };

  const postReview = async (review: Omit<Review, 'id'>) => {
    try {
      const resp = await fetch('http://localhost:3000/api/review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(review),
      });

      if (!resp.ok)
        throw new Error(
          `An error occurred submitting the review: Status ${resp.status}`,
        );

      const submittedReview = await resp.json();
      console.log('success!', submittedReview);
    } catch (err) {
      throw new Error(
        'An error occurred submitting the review, please try again.',
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      method="post"
      className="flex flex-col items-center"
    >
      <StarRating
        rating={rating}
        isInput={true}
        size="l"
        setRating={setRating}
        hoverRating={hoverRating}
        setHoverRating={setHoverRating}
      />
      <input name="rating" type="hidden" value={rating} />
      <input name="author" type="text" placeholder="author" />
      <textarea name="review" placeholder="Write a review..." />
      <input
        type="submit"
        className="mt-10 h-10 px-6 font-semibold rounded-md text-white"
        value="Submit review"
        disabled={rating === 0}
      />
    </form>
  );
};

StarRatingInput.displayName = 'StarRatingInput';
export default StarRatingInput;
