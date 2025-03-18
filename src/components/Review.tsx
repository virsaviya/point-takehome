import Review_t from '@/data/Review';

import Avatar from '@/components/Avatar';
import StarRating from './StarRating';

const Review = ({ content }: { content: Review_t }) => {
  return (
    <div className="review mb-4">
      <div className="flex">
        <Avatar alt={`avatar for ${content.author}`} />
        <div>
          <StarRating rating={content.rating} />
          <div>{content.author}</div>
        </div>
      </div>
      <div>{content.review}</div>
    </div>
  );
};

Review.displayName = 'Review';
export default Review;
