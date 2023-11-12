import { useState } from "react";
import useObject from "../hooks/useObject";
import QuantitySelector from "../shared/QuantitySelector";
import "../../styles/StoreCard.scss";

const StoreCard = ({ id, cartState }) => {
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    const setCart = cartState[1];

    setCart((prevCart) => {
      let newCart = null;

      if (prevCart.filter((item) => item.id === id).length) {
        newCart = prevCart.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        newCart = [...prevCart, { id: id, quantity: quantity }];
      }

      return newCart;
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
      <QuantitySelector state={[quantity, setQuantity]} minValue={1} />
      <button type="button" onClick={() => addToCart()}>
        Add To Cart
      </button>
    </div>
  );
};

export default StoreCard;
