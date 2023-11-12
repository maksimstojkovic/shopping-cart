import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ cart = [] }) => {
  const cartSize = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav>
      <div className="logo">
        <Link to={""} aria-label="Home">
          <h2>Real Store</h2>
        </Link>
      </div>

      <div className="cart">
        <Link to={"cart"} aria-label="Cart">
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
