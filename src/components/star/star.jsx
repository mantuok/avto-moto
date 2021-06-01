import React from 'react';
import {StarType} from '../../const';

const Star = (props) => {
  const {starIndex, rating, hoverRating, onMouseEnter, onMouseLeave, onSubmitRating,}

  const getStarImage = () => {
    if (hoverRating >= starRating) {
      return StarType.active.SRC;
    } else {
      return StarType.inactive.SRC
    }
  }

  return (
    <img 
      src={getStarImage()} 
      width="27" 
      height="27" 
      alt="Звезда" 
      onMouseEnter={() => onMouseEnter(starIndex)}
      onMouseLeave={onMouseLeave}
      onSubmitRating = {onSubmitRating}
    />
  )
}

export default Star;