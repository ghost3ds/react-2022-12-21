import { createStore } from '../customStore/store/store';

const rootReducer = (
  state = {
    cart: {},
  },
  action = {},
) => {
  switch (action.type) {
    case 'addDish': {
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload]: (state.cart[action.payload] || 0) + 1,
        },
      };
    }
    case 'removeDish': {
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload]: (state.cart[action.payload] || 1) - 1,
        },
      };
    }
    default:
      return state;
  }
};

export const store = createStore(rootReducer);
