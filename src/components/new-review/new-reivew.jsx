import React, {useState} from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {nanoid} from 'nanoid';
import ErrorMessage from '../error-message/error-message';
import Star from '../star/star';
import {
  requiredField,
  STAR_ARRAY
} from '../../const';

const NewReview = (props) => {
  const {onClosePopup, onSubmitReview} = props;

  const [formData, setFormData] = useState({
    author: ``,
    advantages: ``,
    disadvantages: ``,
    comment: ``,
    rating: 0,
    ratingOnHover: 0,
    // invalidFields: `` 
  })

  const composeNewReview = () => {
    return {
       ...formData,
       id: nanoid(),
       carId: 1,
       date: new Date(),
     }
   }

   const checkValidity = () => {
    //  Object.values(requiredField).map((field) => {
    //   console.log(formData.field)
    //   if (formData.field === ``) {
    //     setFormData({
    //       ...formData,
    //       invalidFields: [...setFormData.invalidFields, field]
    //     })
    //   } 
    //  })
 
    // if (formData.author === ``) {
    //   console.log(`empty author`)
    //   setFormData({
    //     ...formData,
    //     invalidFields: [...formData.invalidFields, requiredField.AUTHOR]
    //   })
    // }

    // if (formData.comment === ``) {
    //   setFormData({
    //     ...formData,
    //     invalidFields: [...formData.invalidFields, requiredField.COMMENT]
    //   })
    // }
   }

  const renderRatingStars = () => {
    // debugger    
    return STAR_ARRAY.map((starIndex) => {
      return <Star
        key={nanoid()}
        starIndex={starIndex}
        rating={formData.rating}
        ratingOnHover={formData.ratingOnHover}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onSelectRating={onSelectRating}
       />
    })
  }

  
  const renderErrorMessage = (inputName) => {
    if (formData.invalidFields.includes(inputName)) {
      return <ErrorMessage />
    }
  };

  const onMouseEnter = (index) => {
    setFormData({
      ...formData,
      ratingOnHover: index
    })
  };

  const onMouseLeave = () => {
    setFormData({
      ...formData,
      ratingOnHover: 0
    })
  };

  const onSelectRating = (index) => {
    console.log(`submit`)
    setFormData({
      ...formData,
      rating: index
    })
  };

  const handleInputChange = (evt) => {
    const {name, value} = evt.target;
    setFormData({
      ...formData,
      [name]: value
    })
  };

  const handleFormSubmit = (evt) => {
    // debugger
    evt.preventDefault();
    // checkValidity();
    console.log(formData.invalidFields)
    // if (formData.invalidFields.length === 0) {
    if (formData.author !== `` || formData.comment !== ``) {
      const newReviewData = composeNewReview();
      onSubmitReview(newReviewData);
      onClosePopup();
    } 
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
          {/* {renderErrorMessage(requiredField.AUTHOR)} */}
          <div className="form__rating">
            {renderRatingStars()}
          </div>
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
            required
          />
          <button 
            className="form__submit" 
            type="submit"
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