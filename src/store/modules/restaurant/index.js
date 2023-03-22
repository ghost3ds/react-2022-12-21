import { RESTAURANT_ACTIONS } from './actions';

const defaultState = {
  entities: {},
  ids: [],
};

export const restaurantReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RESTAURANT_ACTIONS.successLoading: {
      return { ...action.payload };
    }
    default:
      return state;
  }
};
