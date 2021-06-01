import React from 'react';
import {connect} from 'react-redux';
import Review from '../reivew/review';

const ReviewsTab = (props) => {
  const {reviews} = props;

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

const mapStateToProps = (state) => ({
  reviews: state.reviews
})

export default connect(mapStateToProps, null)(ReviewsTab);
