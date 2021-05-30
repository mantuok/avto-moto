import React from 'react';
import FeaturesTab from '../features-tab/features-tab';
import ReviewsTab from '../reviews-tab/reviews-tab';
import ContactsTab from '../contacts-tab/contacts-tab';

const DetailedInfo = () => {
  return (
    <section className="main__detailed-info detailed-info">
      <div className="detailed-info__tabs">
        <button className="detailed-info__tab detailed-info__tab--active">Характеристики</button>
        <button className="detailed-info__tab">Отзывы</button>
        <button className="detailed-info__tab">Контакты</button>
      </div>
      {/* <FeaturesTab /> */}
      {/* <ReviewsTab /> */}
      <ContactsTab />
    </section>
  )
}

export default DetailedInfo;