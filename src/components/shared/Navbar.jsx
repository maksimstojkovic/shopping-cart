import { Link } from "react-router-dom";

const Navbar = ({ cart = [] }) => {
  const cartSize = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav>
      <div className="logo">
        <Link to={import.meta.env.BASE_URL} aria-label="Home">
          <h1>Real Store</h1>
        </Link>
      </div>

      <div className="cart">
        <Link to={import.meta.env.BASE_URL + "cart"} aria-label="Cart">
          <img src="cart-outline.svg" alt="Shopping cart icon" />
          <div className="count">Cart - {cartSize}</div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
