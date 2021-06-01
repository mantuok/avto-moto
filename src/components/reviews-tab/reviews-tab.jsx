import React from 'react';
import {connect} from 'react-redux';
import Review from '../reivew/review';
import NewReview from '../new-review/new-reivew';

const ReviewsTab = (props) => {
  const {reviews, popupToBeOpen} = props;

  const renderReviews = () => {
    return reviews.map((review) => {
      return <Review 
        key={review.id}
        review={review}
      />
    });
  }

  const renderNewReviewPopup = popupToBeOpen ?  <NewReview /> : ``

  return (
    <section className="detailed-info__reivews reviews">
      <ul className="reviews__list"> 
        {renderReviews()}
      </ul>
      <button className="reviews__add-review">ОСТАВИТЬ ОТЗЫВ</button>
      {renderNewReviewPopup}
    </section>
  )
};

const mapStateToProps = (state) => ({
  reviews: state.reviews,
  popupToBeOpen: state.popupToBeOpen
})

export default connect(mapStateToProps, null)(ReviewsTab);
