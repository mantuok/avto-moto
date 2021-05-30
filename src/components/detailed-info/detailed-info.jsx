import React from 'react';
import FeaturesTab from '../features-tab/features-tab';

const DetailedInfo = () => {
  return (
    <section className="main__detailed-info detailed-info">
      <div className="detailed-info__tabs">
        <button className="detailed-info__tab detailed-info__tab--active">Характеристики</button>
        <button className="detailed-info__tab">Отзывы</button>
        <button className="detailed-info__tab">Контакты</button>
      </div>
      <FeaturesTab />
      
    </section>
  )
}

export default DetailedInfo;