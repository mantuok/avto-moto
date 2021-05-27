import React from 'react';
import classnames from 'classnames';
import NavigationElement from '../navigation-element/navigation-element' 
import {
  NavigationType,
  NavigationItem
} from '../../const';


const HeaderNavigation = (props) => {
  const {navigationType} = props;

  const navigationClass = classnames(
    {"header__navigation": navigationType === NavigationType.HEADER},
    {"footer__navigation": navigationType === NavigationType.FOOTER},
    `navigation`
  )

  const navigationItemsList = Object.values(NavigationItem[navigationType])

  const renderNavigationItems = () => {
    return navigationItemsList.map((item) => {
      return <NavigationElement 
        key={item.ID}
        name={item.NAME}
        url={item.URL}
        />
    })
  }

  return (
    <nav className={navigationClass}>
      <ul className="navigation__list">
        {renderNavigationItems()}
      </ul>
    </nav>
  )
}

export default HeaderNavigation;