import React from 'react';
import Navigation from '../navigation/navigation';
import {NavigationType} from '../../const';

const Header = () => {
  return (
    <header className="page__header header">
      <div className="header__containter container">
        <img className="header__logo" />
        <Navigation navigationType={NavigationType.HEADER} />
      </div>
    </header>
  )
}

export default Header;