import React, { useState } from 'react';
import { useReducer } from 'react';
import { Size } from '../../constants/ui';
import Rating from '../Rating/Rating';

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
        <Rating
          size={Size.m}
          value={formValue.rating}
          type="number"
          onChange={(value) => dispatch({ type: 'changeRating', payload: value })}
        />
        {console.log(formValue.rating)}
      </div>
    </div>
  );
};

export default NewReviewForm;
