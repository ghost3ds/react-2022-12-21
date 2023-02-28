export const selectCart = (state) => state.cart;

export const selectDishCountByName = (state, { dishName }) =>
  selectCart(state)[dishName] || 0;
