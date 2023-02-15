import React from 'react';
import { useReducer } from 'react';

const DEFAULT_FORM_VALUE = {
  name: '',
  text: '',
  rating: 5,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'changeName': {
      return {
        ...DEFAULT_FORM_VALUE,
        name: action.payload,
      };
    }
    case 'changeText': {
      return {
        ...state,
        text: action.payload,
      };
    }
    case 'changeRating': {
      return {
        ...state,
        rating: action.payload,
      };
    }

    default:
      return state;
  }
};

const NewReviewForm = ({}) => {
  const [formValue, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  return (
    <div>
      <div>
        <label>Name:</label>
        <input
          value={formValue.name}
          onChange={(event) =>
            dispatch({ type: 'changeName', payload: event.target.value })
          }
        />
      </div>
      <div>
        <label>Text:</label>
        <input
          value={formValue.text}
          onChange={(event) =>
            dispatch({ type: 'changeText', payload: event.target.value })
          }
        />
      </div>
      <div>
        <label>Rating:</label>
        <input
          value={formValue.rating}
          type="number"
          onChange={(event) =>
            dispatch({ type: 'changeRating', payload: Number(event.target.value) })
          }
        />
      </div>
      {console.log(formValue)}
    </div>
  );
};

export default NewReviewForm;
