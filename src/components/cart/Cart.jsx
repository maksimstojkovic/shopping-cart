import CartCard from "./CartCard";
import { useOutletContext, Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useOutletContext();

  const cartValue = cart.length
    ? cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
    : 0;

  return (
    <>
      <header className="split">
        <h2>Shopping Cart</h2>
        <Link to={import.meta.env.BASE_URL + "checkout"}>
          <button type="button">Checkout - ${cartValue}</button>
        </Link>
      </header>

      {cart.length ? (
        <div className="cart-cards">
          {cart.map((item) => (
            <CartCard key={item.id} id={item.id} cartState={[cart, setCart]} />
          ))}
        </div>
      ) : (
        <p>No products in cart.</p>
      )}
    </>
  );
};

export default Cart;
