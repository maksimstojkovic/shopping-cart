import CartCard from "./CartCard";
import { useOutletContext, Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useOutletContext();

  return (
    <>
      <header className="split">
        <h2>Shopping Cart</h2>
        <Link to={import.meta.env.BASE_URL + "checkout"}>
          <button type="button">Checkout</button>
        </Link>
      </header>

      <div className="cart-cards">
      {cart.map((item) => (
        <CartCard key={item.id} id={item.id} cartState={[cart, setCart]} />
      ))}
      </div>
    </>
  );
};

export default Cart;
