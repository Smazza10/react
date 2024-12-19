import React from 'react';

const ItemListContainer = ({ message }) => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem', color: '#333' }}>
      <h2>{message}</h2>
      <p>Encuentra los mejores gadgets y tecnología en un solo lugar.</p>
    </div>
  );
};

export default ItemListContainer;
