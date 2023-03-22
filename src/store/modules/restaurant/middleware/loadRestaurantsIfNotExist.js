import { normalizer } from '../../../utils/normalizer';
import { RESTAURANT_ACTIONS, successLoadingRestaurants } from '../actions';
import { selectRestaurantIds } from '../selectors';

export const loadRestaurantsIfNotExist = (store) => (next) => (action) => {
  if (action?.type !== RESTAURANT_ACTIONS.load) {
    return next(action);
  }

  const state = store.getState();

  if (selectRestaurantIds(state)?.length) {
    return;
  }

  fetch('http://localhost:3001/api/restaurants/')
    .then((response) => response.json())
    .then((restaurants) => {
      console.log(restaurants);
      store.dispatch(successLoadingRestaurants(normalizer(restaurants)));
    });
};
