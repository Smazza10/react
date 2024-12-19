import React from 'react';

const CartWidget = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <img src={`${import.meta.env.BASE_URL}cart-icon.png`} alt="Carrito de compras" style={{ height: '30px' }} />
      <span>3</span>
    </div>
  );
};

export default CartWidget;
