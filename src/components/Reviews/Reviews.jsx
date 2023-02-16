import React from 'react';
import Review from '../Review/Review';

const Reviews = ({ reviews }) => {
  return (
    <div>
      <h2>Reviews:</h2>
      <ul>
        {reviews.map((review) => (
          <li>
            <Review text={review.text} rating={review.rating} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
