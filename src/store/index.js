import { combineReducers, createStore } from 'redux';
import { cartReducer } from './modules/cart/cart';
import { dishReducer } from './modules/dish';
import { restaurantReducer } from './modules/restaurant';
import { reviewReducer } from './modules/review';
import { userReducer } from './modules/user';

const rootReducer = combineReducers({
  cart: cartReducer,
  restaurant: restaurantReducer,
  dish: dishReducer,
  review: reviewReducer,
  user: userReducer,
});

export const store = createStore(rootReducer);
