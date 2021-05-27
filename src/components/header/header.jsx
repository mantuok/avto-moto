import React from 'react';
import Navigation from '../navigation/navigation';

const Header = () => {
  return (
    <header className="page__header header">
      <div className="header__containter container">
        <img className="header__logo" />
        <Navigation  />
      </div>
    </header>
  )
}

export default Header;