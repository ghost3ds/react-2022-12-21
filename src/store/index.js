import { combineReducers, createStore } from 'redux';
import { cartReducer } from './modules/cart/cart';
import { dishReducer } from './modules/dish';
import { restaurantReducer } from './modules/restaurant';
import { reviewReducer } from './modules/review';

const rootReducer = combineReducers({
  cart: cartReducer,
  restaurant: restaurantReducer,
  dish: dishReducer,
  review: reviewReducer,
});

export const store = createStore(rootReducer);
