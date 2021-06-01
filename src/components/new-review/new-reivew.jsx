import React from 'react';

const NewReview = () => {
  return (
    <section className="main__new-review new-review">
      <div className="new-review__popup">
        <h1 className="new-review__heading">Оставить отзыв</h1>
        <form className="new-review__form form">
          <label className="form__label--author-name visually hidden" htmlFor="author-name">Имя</label>
          <input className="form__input--author-name" type="text" name="author-name" id="author-name" placeholder="Имя" required />
          
          <label className="form__label--advantages visually hidden" htmlFor="advantages">Достоинства</label>
          <input className="form__input--advantages" type="text" name="advantages" id="advantages" placeholder="Достоинства" />
          <label className="form__label--disadvantages visually hidden" htmlFor="disadvantages">Недостатки</label>
          <input className="form__input--disadvantages" type="text" name="disadvantages" id="disadvantages" placeholder="Недостатки" />
          <label className="form__label--comment visually hidden" htmlFor="comment">Комментарий</label>
          <textarea className="form__input--comment" rows="3" name="comment" id="comment" placeholder="Комментарий" />
          <button className="form__submit" type="submit">ОСТАВИТЬ ОТЗЫВ</button>

        </form>
        <button className="new_review__close-button"><span className="new_review__close-text visually-hidden">Закрыть</span></button>
      </div>
    </section>
  )
}

export default NewReview;