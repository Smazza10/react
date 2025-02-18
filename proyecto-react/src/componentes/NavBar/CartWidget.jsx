import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { totalItems } = useContext(CartContext);

  return <div>🛒 {totalItems}</div>;
};

export default CartWidget;
