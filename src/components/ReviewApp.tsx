import ReviewForm from '@/components/ReviewForm';
import ExistingReviews from '@/components/ExistingReviews';

const ReviewApp = () => {
  // Tip: You can grab data with fetch or an HTTP client of your choice:
  //      await fetch("http://localhost:3000/api/reviews")
  //      await axios.get("http://localhost:3000/api/reviews")

  return (
    <div>
      <ReviewForm />
      <ExistingReviews />
    </div>
  );
};

ReviewApp.displayName = 'ReviewApp';
export default ReviewApp;
