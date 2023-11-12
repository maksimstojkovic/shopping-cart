import { Link } from "react-router-dom";

const Navbar = ({ cart = [] }) => {
  const cartSize = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav>
      <div className="logo">
        <Link to={import.meta.env.BASE_URL} aria-label="Home">
          <h2>Real Store</h2>
        </Link>
      </div>

      <div className="cart">
        <Link to={import.meta.env.BASE_URL + "cart"} aria-label="Cart">
          <button type="button">
            <img src="cart-outline.svg" alt="Shopping cart icon" />
            <div>Cart - {cartSize}</div>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
