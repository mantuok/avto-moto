import React from 'react';
import Feature from '../feature/feature';
import {FeatureItem} from '../../const';
import {cars} from '../../mocks/cars';

const FeaturesTab = () => {
  const featuresList = Object.values(FeatureItem);

  const car = cars[0];

  const renderFeaturesList = () => {
    return featuresList.map((item) => {
      return <Feature
        key={item.ID}
        name={item.NAME}
        value={car[item.NAME_EN]}
      />
    })
  }

  return (
    <ul className="detailed-info__features detailed-features">
    {renderFeaturesList()}
  </ul>
  )
};

export default FeaturesTab;