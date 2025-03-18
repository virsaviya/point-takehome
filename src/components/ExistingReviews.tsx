import React from 'react';

import Review from '@/components/Review';
import Review_t from '@/data/Review';

const ExistingReviews = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [reviews, setReviews] = React.useState<Array<Review_t>>([]);
  React.useEffect(() => {
    setLoading(true);
    const getReviews = async () => {
      try {
        const resp = await fetch('http://localhost:3000/api/reviews');
        if (!resp.ok)
          throw new Error(`FETCHING DATA FAILED! Status: ${resp.status}`);

        const data = await resp.json();
        if (!Array.isArray(data))
          throw new Error(`FETCHING DATA FAILED! Unexpected response.`);

        setReviews(data);
      } catch (e) {
        throw new Error(`FETCHING DATA FAILED! Status: ${e}`);
      }
    };
    getReviews();
    setLoading(false);
  }, []);

  if (loading) return <div>loading...</div>;
  return (
    <div className="mt-8">
      {reviews.map(r => (
        <Review key={r.id} content={r} />
      ))}
    </div>
  );
};

ExistingReviews.displayName = 'ExistingReviews';
export default ExistingReviews;
