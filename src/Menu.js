import React from 'react';
import cn from 'classnames';
import './Menu.css';

const Menu = ({
  children, 
  menuActive
}) => 
  <div className={cn({
    'menu': true,
    'menu-active': menuActive
  })}>
    {children}
  </div>;

export default Menu;