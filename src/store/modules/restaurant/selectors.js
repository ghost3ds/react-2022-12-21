export const selectRestaurant = (state) => state.restaurant;

export const selectRestaurantById = (state, { restaurantId }) =>
  selectRestaurant(state).entities[restaurantId];

export const selectRestaurantMenuById = (state, { restaurantId }) =>
  selectRestaurantById(state, { restaurantId })?.menu;

export const selectRestaurantIds = (state) => selectRestaurant(state).ids;
