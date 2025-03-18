import Star from '@/components/Star';
import StarRating from './StarRating';

const StarRatingInput = () => {
  return (
    <section className="flex flex-col items-center">
      <StarRating size="l" rating={0} />
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
