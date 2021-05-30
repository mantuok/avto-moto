import React from 'react';
import {reviews} from '../../mocks/reviews';
import Review from '../reivew/review';

const ReviewsTab = () => {

  const renderReviews = () => {
    return reviews.map((review) => {
      return <Review 
        key={review.id}
        review={review}
      />
    });
  }

  return (
    <section className="detailed-info__reivews reviews">
      <ul className="reviews__list"> 
        {renderReviews()}
      </ul>
      <button className="reviews__add-review">ОСТАВИТЬ ОТЗЫВ</button>
    </section>
  )
};

export default ReviewsTab;
