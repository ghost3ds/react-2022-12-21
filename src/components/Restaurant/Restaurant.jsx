import React, { useMemo } from 'react';
import Menu from '../Menu/Menu';
import NewReviewForm from '../NewReviewForm/NewReviewForm';
import Reviews from '../Reviews/Reviews';

const Restaurant = ({ restaurant }) => {
  const rating = useMemo(
    () =>
      Math.round(
        restaurant.reviews.reduce((sum, review) => sum + review.rating, 0) /
          restaurant.reviews.length,
      ),
    [restaurant.reviews],
  );
  return (
    <div>
      <h1>{restaurant.name}</h1>
      {rating}
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
      <NewReviewForm />
    </div>
  );
};

export default Restaurant;
