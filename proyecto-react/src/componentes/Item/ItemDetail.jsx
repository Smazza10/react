import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const handleAdd = (quantity) => {
    addToCart({ ...product, quantity });
    setAdded(true);
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <p>{product.description}</p>
      {!added ? <ItemCount stock={product.stock} onAdd={handleAdd} /> : <p>Producto agregado al carrito</p>}
    </div>
  );
};

export default ItemDetail;
