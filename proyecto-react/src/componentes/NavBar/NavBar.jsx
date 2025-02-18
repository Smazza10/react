import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/category/tech">Tech</Link>
      <Link to="/category/gadgets">Gadgets</Link>
      <Link to="/cart">Cart</Link>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
