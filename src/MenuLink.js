import React from 'react';
import './Menu.css'
import { Link } from 'react-router-dom';

const MenuLink = ({
  route,
  closeMobileMenu
}) =>
  <Link 
    to={`/${route}`}
    className={"menu-link"}
    onClick={closeMobileMenu}
  >
    {route}
  </Link>;

export default MenuLink;