import React from 'react';
import {StarType} from '../../const';

const Star = (props) => {
  const {starIndex, rating, ratingOnHover, onMouseEnter, onMouseLeave, onSelectRating} = props;

  const getStarImage = () => {
    if (ratingOnHover >= starIndex) {
      return StarType.active.SRC;
    } else if (!ratingOnHover && rating >= starIndex) {
      return StarType.active.SRC;
    } else {
      return StarType.inactive.SRC;
    }
  }

  return (
    <img 
      className="form-rating__star"
      src={getStarImage()} 
      width="27" 
      height="27" 
      alt="Звезда" 
      onMouseEnter={() => onMouseEnter(starIndex)}
      onMouseLeave={onMouseLeave}
      onClick = {() => onSelectRating(starIndex)}
    />
  )
}

export default Star;