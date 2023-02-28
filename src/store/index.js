import { combineReducers, createStore } from 'redux';
import { cartReducer } from './modules/cart';

const rootReducer = combineReducers({
  cart: cartReducer,
});

export const store = createStore(rootReducer);
