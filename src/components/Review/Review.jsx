import React from 'react';
import { Size } from '../../constants/ui';
import Rating from '../Rating/Rating';

const Review = ({ text, rating }) => {
  return (
    <div>
      {text}
      <Rating value={rating} size={Size.s} />
    </div>
  );
};

export default Review;
