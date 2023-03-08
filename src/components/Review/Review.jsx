import React from 'react';
import { useSelector } from 'react-redux';
import { Size } from '../../constants/ui';
import { selectReviewById } from '../../store/modules/review/selectors';
import Rating from '../Rating/Rating';
import User from '../User/User';

const Review = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewById(state, { reviewId }));

  if (!review) {
    return null;
  }

  return (
    <div>
      {review.text}
      <Rating value={review.rating} size={Size.s} />
      <User userId={review.userId} />
    </div>
  );
};

export default Review;
