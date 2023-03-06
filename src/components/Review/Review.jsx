import React from 'react';
import { useSelector } from 'react-redux';
import { Size } from '../../constants/ui';
import { selectReviewById } from '../../store/modules/review/selectors';
import Rating from '../Rating/Rating';

const Review = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewById(state, { reviewId }));
  return (
    <div>
      {review.text}
      {/* <Rating value={rating} size={Size.s} /> */}
    </div>
  );
};

export default Review;
