import Review_t from '@/data/Review';

import Avatar from '@/components/Avatar';
import StarRating from './StarRating';

const Review = ({ content }: { content: Review_t }) => {
  return (
    <div className="review mb-4 p-2">
      <div className="flex">
        <Avatar id={content.id} alt={`avatar for ${content.author}`} />
        <div>
          <div className="text-sm">{content.author}</div>
          <StarRating rating={content.rating} />
        </div>
      </div>
      <div>{content.review}</div>
    </div>
  );
};

Review.displayName = 'Review';
export default Review;
