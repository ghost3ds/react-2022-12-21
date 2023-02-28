export const selectDish = (state) => state.dish;

export const selectDishById = (state, { dishId }) => selectDish(state).entities[dishId];
