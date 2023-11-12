import { useState } from "react";
import useObject from "../hooks/useObject";
import QuantitySelector from "../shared/QuantitySelector";
import "../../styles/StoreCard.scss";

const CartCard = ({ id, cartState }) => {
  const [cart, setCart] = cartState;

  const quantity = cart.filter((item) => item.id === id)[0].quantity;

  const setQuantity = (callback) => {
    setCart((prevCart) => {
      const prevQuantity = prevCart.filter((item) => item.id === id)[0]
        .quantity;
      const newQuantity = callback(prevQuantity);

      let newCart = null;

      newCart = prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      );

      return newCart;
    });
  };

  const removeItem = () => {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.id !== id);
    });
  };

  const { object, error, loading } = useObject(
    "https://fakestoreapi.com/products/",
    id
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error!</p>;
  }

  return (
    <div className="store-card">
      <img src={object.image} alt="Product image" />
      <h3 className="title">{object.title}</h3>
      <p className="description">{object.description}</p>
      <p className="price">{object.price}</p>
      <QuantitySelector state={[quantity, setQuantity]} minValue={1} />
      <button type="button" onClick={() => removeItem()}>
        Remove
      </button>
    </div>
  );
};

export default CartCard;
