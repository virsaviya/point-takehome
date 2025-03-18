import Star, { StarSize } from '@/components/Star';

const StarRating = ({
  rating,
  size = 'm',
}: {
  rating: number;
  size?: StarSize;
}) => {
  const stars = [];
  for (let i = 1; i < 6; i++) {
    stars.push(<Star starId={i} marked={i <= rating} size={size} />);
  }

  return <div className="flex">{stars}</div>;
};

export default StarRating;
