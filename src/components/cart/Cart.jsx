import CartCard from "./CartCard";
import { useOutletContext } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useOutletContext();

  return (
    <>
      <h2>Shopping Cart</h2>

      {cart.map((item) => (
        <CartCard key={item.id} id={item.id} cartState={[cart, setCart]} />
      ))}
    </>
  );
};

export default Cart;
