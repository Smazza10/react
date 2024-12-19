import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#282c34', color: 'white' }}>
      <div>
        <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Logo de la tienda" style={{ height: '40px' }} />
      </div>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem' }}>
        <li><a href="#home" style={{ color: 'white', textDecoration: 'none' }}>Inicio</a></li>
        <li><a href="#products" style={{ color: 'white', textDecoration: 'none' }}>Productos</a></li>
        <li><a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
