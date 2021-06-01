import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import Review from '../reivew/review';
import NewReview from '../new-review/new-reivew';

const ReviewsTab = (props) => {
  const {reviews, popupToBeOpen, onOpenPopup} = props;

  const renderReviews = () => {
    return reviews.map((review) => {
      return <Review 
        key={review.id}
        review={review}
      />
    });
  }

  const renderNewReviewPopup = popupToBeOpen ?  <NewReview /> : ``

  const handleAddReviewClick = () => {
    onOpenPopup();
  }

  return (
    <section className="detailed-info__reivews reviews">
      <ul className="reviews__list"> 
        {renderReviews()}
      </ul>
      <button 
        className="reviews__add-review"
        onClick={handleAddReviewClick}
      >
        ОСТАВИТЬ ОТЗЫВ
      </button>
      {renderNewReviewPopup}
    </section>
  )
};

const mapStateToProps = (state) => ({
  reviews: state.reviews,
  popupToBeOpen: state.popupToBeOpen
})

const mapDispatchToProps = (dispatch) => ({
  onOpenPopup() {
    dispatch(ActionCreator.openPopup())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsTab);
