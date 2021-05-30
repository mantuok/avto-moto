import React from 'react';
import {RecommendRating} from '../../const';
import {getHumanDateFormat} from '../../utils/day';

const Review = ({review}) => {
  const {author, date, advantages, disadvantages, comment, rating} = review;

  const renderStarRating = () => {
    let starsList = [];
    for (let i = 0; i < rating; i++) {
      starsList.push(<span className="rating__star rating__star--active"></span>)
    }
    for (let i = 0; i < 5 - rating; i++) {
      starsList.push(<span className="rating__star rating__star--inactive"></span>)
    }
    return starsList;
  }

  const renderRecommends = () => {
    if (rating >= RecommendRating) {
      return <p className="review__recommends">Советует</p>
    }
  }

  return (
    <li className="reviews__item review">
      <h3 className="review__author">{author}</h3>
      <div className="review__text text">
        <h4 className="text__heading text__heading--advantages">Достоинства</h4>
        <p className="text__advantages">{advantages}</p>
        <h4 className="text__heading text__heading--advantages">Недостатки</h4>
        <p className="text__advantages">{disadvantages}</p>
        <h4 className="text__heading text__heading--advantages">Комментарий</h4>
        <p className="text__advantages">{comment}</p>
      </div>
      <div className="review__rating rating">
        {renderStarRating()}
      </div>
      {renderRecommends()}
      <p className="review__date">{getHumanDateFormat(date)}</p>
      <button className="review__reply">Ответить</button>
    </li>
  )
}

export default Review;