import React from 'react';

import Review from '@/data/Review';
import StarRating from './StarRating';

const ReviewForm = () => {
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
    e.currentTarget.reset();
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
      className="flex flex-col justify-center align-center"
    >
      <div className="flex space-between mb-2">
        <StarRating
          rating={rating}
          isInput={true}
          size="l"
          setRating={setRating}
          hoverRating={hoverRating}
          setHoverRating={setHoverRating}
        />
        <input name="rating" type="hidden" value={rating} />
        <input
          className="p-1 w-full text-sm"
          name="author"
          type="text"
          placeholder="Your name"
        />
      </div>
      <textarea
        className="p-1 mb-2 w-full min-h-[100px] text-sm"
        name="review"
        placeholder="Write a review..."
      />
      <input
        className="h-10 px-6 font-semibold rounded-md text-white disabled:opacity-50 disabled:cursor-not-allowed"
        type="submit"
        value="Submit review"
        disabled={rating === 0}
      />
    </form>
  );
};

ReviewForm.displayName = 'ReviewForm';
export default ReviewForm;
