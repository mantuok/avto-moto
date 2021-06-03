import React from 'react';
import {PropTypes} from 'prop-types';

const NavigationElement = (props) => {
  const {name, url} = props;

  return (
    <li className="navigation__element"> 
      <a className="navigation__link" href={url}>
        {name}
      </a>
    </li>
  );
};

NavigationElement.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired 
};

export default NavigationElement;