import React from 'react';

const NavigationElement = (props) => {
  const {name, url} = props;

  return (
    <li className="navigsation__element"> 
      <a className="navigation__link" href={url}>
        {name}
      </a>
    </li>
  );
};

export default NavigationElement;