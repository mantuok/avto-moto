import React, {useState} from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {nanoid} from 'nanoid'


const NewReview = (props) => {
  const {onClosePopup, onSubmitReview} = props;

  const [formData, setFormData] = useState({
    author: ``,
    advantages: ``,
    disadvantages: ``,
    comment: ``,
    rating: ``,
    ratingOnHover: ``
  })

  const handleInputChange = (evt) => {
    const {name, value} = evt.target;
    setFormData({
      ...formData,
      [name]: value
    })
  };

  const composeNewReview = () => {
   return {
      ...formData,
      id: nanoid(),
      carId: 1,
      date: new Date(),
      rating: 5
    }
  }

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const newReviewData = composeNewReview();
    onSubmitReview(newReviewData);
  }

  const handleCloseButtonClick = () => {
    onClosePopup();
  };
  
  return (
    <section className="main__new-review new-review">
      <div className="new-review__popup">
        <h1 className="new-review__heading">Оставить отзыв</h1>
        <form 
          className="new-review__form form"
          action=""
          onSubmit={handleFormSubmit}
        >
          <label className="form__label--author visually hidden" htmlFor="author">Имя</label>
          <input 
            className="form__input--author" 
            type="text" 
            name="author" 
            id="author" 
            placeholder="Имя" 
            value={formData.author}
            onInput={handleInputChange}
            required 
          />
          <label className="form__label--advantages visually hidden" htmlFor="advantages">Достоинства</label>
          <input 
            className="form__input--advantages" 
            type="text" 
            name="advantages" 
            id="advantages" 
            placeholder="Достоинства" 
            value={formData.advantages}
            onInput={handleInputChange}
          />
          <label className="form__label--disadvantages visually hidden" htmlFor="disadvantages">Недостатки</label>
          <input 
            className="form__input--disadvantages" 
            type="text" 
            name="disadvantages" 
            id="disadvantages" 
            placeholder="Недостатки" 
            value={formData.disadvantages}
            onInput={handleInputChange}
          />
          <label className="form__label--comment visually hidden" htmlFor="comment">Комментарий</label>
          <textarea 
            className="form__input--comment" 
            rows="3" 
            name="comment" 
            id="comment" 
            placeholder="Комментарий" 
            value={formData.comment}
            onInput={handleInputChange}
          />
          <button 
            className="form__submit" 
            type="submit"
            // onSubmit={handleFormSubmit}
          >
            ОСТАВИТЬ ОТЗЫВ
          </button>

        </form>
        <button 
          className="new_review__close-button"
          onClick={handleCloseButtonClick}
        >
          <span className="new_review__close-text visually-hidden">Закрыть</span>
        </button>
      </div>
    </section>
  )
}

const mapDispatchToProps = (dispatch) => ({
  onClosePopup() {
    dispatch(ActionCreator.closePopup())
  },
  onSubmitReview(newReviewData) {
    dispatch(ActionCreator.saveReview(newReviewData))
  }
});

export default connect(null, mapDispatchToProps)(NewReview);