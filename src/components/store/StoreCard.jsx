import { useState } from "react";
import useObject from "../hooks/useObject";
import QuantitySelector from "../shared/QuantitySelector";
import "../../styles/StoreCard.scss";

const StoreCard = ({ id, cartState }) => {
  const [quantity, setQuantity] = useState(1);

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
        newCart = [
          ...prevCart,
          { id: id, quantity: quantity, product: object },
        ];
      }

      return newCart;
    });
  };

  return (
    <div className="store-card">
      <img className="product-image" src={object.image} alt="Product image" />
      <h3 className="title">
        {object.title.slice(0, 15) +
          (object.description.length > 15 ? "..." : "")}
      </h3>
      <p className="description">
        {object.description.slice(0, 70) +
          (object.description.length > 70 ? "..." : "")}
      </p>
      <p className="price">${object.price}</p>
      <div className="quantity">
        <QuantitySelector state={[quantity, setQuantity]} minValue={1} />
        <button
          type="button"
          className="add-to-cart"
          onClick={() => addToCart()}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default StoreCard;
