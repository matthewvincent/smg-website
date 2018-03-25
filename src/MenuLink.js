import React from 'react';
import cn from 'classnames';
import './Menu.css'

const MenuLink = ({
  route, 
  setRoute,
  selected
}) =>
  <button 
    onClick={() => setRoute(route)}
    className={cn({
      'menu-link': true,
      'menu-link-selected': selected
    })}
  >
    {route}
  </button>;

export default MenuLink;