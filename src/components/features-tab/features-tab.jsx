import React from 'react';
import {connect} from 'react-redux';
import {carsPropTypes} from '../../utils/props-validation';
import Feature from '../feature/feature';
import {FeatureItem} from '../../const';

const FeaturesTab = (props) => {
  const {cars} = props;
  const car = cars[0];

  const featuresList = Object.values(FeatureItem);

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
    <section className="detailed-info__features detailed-features">
      <h3 className="detailed-features visually-hidden">Детальные характеристики</h3>
      <ul className="detailed-features__list">
        {renderFeaturesList()}
      </ul>
    </section>
  )
};

FeaturesTab.prototypes = {
  cars: carsPropTypes
}


const mapStateToProps = (state) => ({
  cars: state.cars
})

export default connect(mapStateToProps, null)(FeaturesTab);