import React from 'react';

const CartWidget = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <img src="/cart-tech.png" alt="Carrito" style={{ height: '30px' }} />
      <span style={{ background: '#ff5722', padding: '0.2rem 0.5rem', borderRadius: '50%', color: '#fff' }}>2</span>
    </div>
  );
};

export default CartWidget;
