import React from 'react';
import {connect} from 'react-redux'
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
      <ul className="detailed-features__list">
        {renderFeaturesList()}
      </ul>
    </section>
  )
};


const mapStateToProps = (state) => ({
  cars: state.cars
})

export default connect(mapStateToProps, null)(FeaturesTab);