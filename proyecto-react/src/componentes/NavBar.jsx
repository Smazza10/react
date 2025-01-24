import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/category/audio">Audio</Link>
      <Link to="/category/perifericos">Periféricos</Link>
      <Link to="/category/monitores">Monitores</Link>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
