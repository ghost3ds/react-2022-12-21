import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../store/modules/restaurant/selectors';
import Menu from '../Menu/Menu';
import NewReviewForm from '../NewReviewForm/NewReviewForm';
import Rating from '../Rating/Rating';
import Reviews from '../Reviews/Reviews';

const Restaurant = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, { restaurantId }),
  );

  // const rating = useMemo(
  //   () =>
  //     Math.round(
  //       restaurant.reviews.reduce((sum, review) => sum + review.rating, 0) /
  //         restaurant.reviews.length,
  //     ),
  //   [restaurant.reviews],
  // );
  return (
    <div>
      <h1>{restaurant.name}</h1>
      {/* Rating: {rating} */}
      {/* <Rating value={rating} /> */}
      <Menu restaurantId={restaurantId} />
      <Reviews restaurantId={restaurantId} />
      {/* <NewReviewForm /> */}
    </div>
  );
};

export default Restaurant;
