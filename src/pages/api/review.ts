import type { NextApiRequest, NextApiResponse } from 'next';

import reviews from '@/data/reviewsData';
import Review from '@/data/Review';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Review | { error: string }>,
) {
  if (req.method === 'GET') {
    // fetch single review by id
    res.status(200);
  } else if (req.method === 'POST') {
    try {
      const { rating, author, review = null } = req.body;

      if (!rating || typeof rating !== 'number' || rating < 1 || rating > 5)
        return res.status(400).json({ error: 'Invalid rating (must be 1-5)' });
      if (!author || typeof author !== 'string')
        return res
          .status(400)
          .json({ error: 'Invalid Author (must be a string)' });

      const newReview: Review = {
        id: reviews.length + 1,
        rating,
        author,
        review: typeof review !== 'string' ? null : review,
      };
      reviews.push(newReview);
      res.status(201).json(newReview);
    } catch (err) {
      res.status(500).json({ error: 'Failed to save review' });
    }
  } else {
    res.status(404);
  }
}
