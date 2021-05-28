import React from 'react';

const Feature = (props) => {
  const {name, value} = props;

  return (
    <li className="detailed-features__item feature">
      <span className="feature__name">{name}</span>
      <span className="feature__value">{value}</span>
    </li>
  )
}

export default Feature;