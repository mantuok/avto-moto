import React from 'react';
import {NavigationType} from '../../const';
import Navigation from '../navigation/navigation';

const Footer = () => {
  return (
    <footer className="page__footer footer">
      <Navigation navigationType={NavigationType.FOOTER} />
    </footer>
  )
}

export default Footer;