import React from 'react';

const ItemListContainer = ({ message }) => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>{message}</h2>
    </div>
  );
};

export default ItemListContainer;
