import React from 'react';
import Feature from '../feature/feature';
import {FeatureItem} from '../../const';

const DetailedInfo = () => {
  const featuresList = Object.values(FeatureItem);

  const renderFeaturesList = () => {
    return featuresList.map((item) => {
      return <Feature
        key={item.ID}
        name={item.NAME}
        value={item.VALUE}
      />
    })
  }

  return (
    <section className="main__detailed-info detailed-info">
      <div className="detailedInfo__tabs">
        <button className="detailed-info__tab detailed-info__tab--active">Характеристики</button>
        <button className="detailed-info__tab">Отзывы</button>
        <button className="detailed-info__tab">Контакты</button>
      </div>
      <ul className="detailed-info__features detailed-features">
        {renderFeaturesList()}
      </ul>

    </section>
  )
}

export default DetailedInfo;