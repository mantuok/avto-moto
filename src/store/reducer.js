import {ActionType} from './action';
import {cars} from '../mocks/cars';
import {reviews} from '../mocks/reviews';

const initialState = {
  cars: cars,
  reviews: reviews
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SAVE_REVIEW:
      return {
        ...state,
        reviews: [...state.reviews, action.payload]
      }
    default: 
      return state;
  }
}

export {reducer};