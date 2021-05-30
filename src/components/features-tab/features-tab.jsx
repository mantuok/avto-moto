import React from 'react';
import Feature from '../feature/feature';
import {FeatureItem} from '../../const';

const FeaturesTab = () => {
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
    <ul className="detailed-info__features detailed-features">
    {renderFeaturesList()}
  </ul>
  )
};

export default FeaturesTab;