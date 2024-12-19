import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: '#222', color: '#fff' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <img src="/logo-tech.png" alt="Logo" style={{ height: '40px' }} />
        <h1 style={{ fontSize: '1.5rem' }}>TechStore</h1>
      </div>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem', margin: 0 }}>
        <li><a href="#home" style={{ color: '#fff', textDecoration: 'none' }}>Inicio</a></li>
        <li><a href="#products" style={{ color: '#fff', textDecoration: 'none' }}>Productos</a></li>
        <li><a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
