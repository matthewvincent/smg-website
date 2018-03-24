import React from 'react';
import cn from 'classnames';

const MenuLink = ({
  route, 
  setRoute,
  selected
}) =>
  <button 
    onClick={() => setRoute(route)}
    className="menu-link"
  >
    {route}
  </button>;

export default MenuLink;