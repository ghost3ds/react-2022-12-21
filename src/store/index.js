import { combineReducers, createStore } from 'redux';
import { cartReducer } from './modules/cart/cart';
import { dishReducer } from './modules/dish';
import { restaurantReducer } from './modules/restaurant';

const rootReducer = combineReducers({
  cart: cartReducer,
  restaurant: restaurantReducer,
  dish: dishReducer,
});

export const store = createStore(rootReducer);
