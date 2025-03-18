import StarRatingInput from '@/components/StarRatingInput';

const ReviewApp = () => {
  // Tip: You can grab data with fetch or an HTTP client of your choice:
  //      await fetch("http://localhost:3000/api/reviews")
  //      await axios.get("http://localhost:3000/api/reviews")

  return (
    <div>
      <StarRatingInput />
    </div>
  );
};

ReviewApp.displayName = 'ReviewApp';
export default ReviewApp;
