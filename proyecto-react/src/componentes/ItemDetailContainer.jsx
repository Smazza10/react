import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'; // Componente de presentación.

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const data = await new Promise((resolve) =>
        setTimeout(() => {
          resolve([
            { id: 1, name: 'Auriculares Bluetooth', category: 'audio', description: 'Alta calidad de sonido' },
            { id: 2, name: 'Teclado Mecánico', category: 'perifericos', description: 'Diseño ergonómico' },
            { id: 3, name: 'Monitor LED', category: 'monitores', description: 'Resolución Full HD' },
          ]);
        }, 500)
      );

      setItem(data.find((product) => product.id === parseInt(itemId)));
    };

    fetchItem();
  }, [itemId]);

  return item ? <ItemDetail item={item} /> : <p>Cargando...</p>;
};

export default ItemDetailContainer;
