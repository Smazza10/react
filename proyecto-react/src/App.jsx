import React from 'react';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer message="¡Bienvenido a TechStore!" />
    </div>
  );
};

export default App;
