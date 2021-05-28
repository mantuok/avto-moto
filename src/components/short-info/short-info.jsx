import React from 'react';

const ShortInfo = () => {
  return (
    <section className="main__short-info short-info">
      <h2 className="short-info__heading">Марпех 11</h2>
      <ul className="short-info__short-features short-features">
        <li className="short-features__item short-features__item--petrol">бензин</li>
        <li className="short-features__item short-features__item--transmission">механика</li>
        <li className="short-features__item short-features__item--power">100 л.с.</li>
        <li className="short-features__item short-features__item--size">1.4 л</li>
      </ul>
      <div className="short-info__price price">
        <span className="price price--new">2 300 000 ₽</span>
        <span className="price price--old">2 400 000 ₽</span>
      </div>
      <button className="short-info__request">оставить заявку</button>
      <button className="short-info__loan">в кредит от 11 000 ₽</button>
    </section>
  )
}

export default ShortInfo;