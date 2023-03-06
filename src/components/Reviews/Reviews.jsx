import React from 'react';
import { useSelector } from 'react-redux';
import { selectRestaurantReviewById } from '../../store/modules/restaurant/selectors';
import Review from '../Review/Review';

const Reviews = ({ restaurantId }) => {
  const reviewIds = useSelector((state) =>
    selectRestaurantReviewById(state, { restaurantId }),
  );
  return (
    <div>
      <h2>Reviews:</h2>
      <ul>
        {reviewIds.map((id) => (
          <li>
            <Review reviewId={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
