export const RESTAURANT_ACTIONS = {
  load: 'restaurant/Load',
  successLoading: 'restaurant/SuccessLoading',
};

export const loadRestaurants = () => ({ type: RESTAURANT_ACTIONS.load });

export const successLoadingRestaurants = (restaurants) => ({
  type: RESTAURANT_ACTIONS.successLoading,
  payload: restaurants,
});
