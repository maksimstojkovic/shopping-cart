import QuantitySelector from "../shared/QuantitySelector";
import "../../styles/StoreCard.scss";

const CartCard = ({ id, cartState }) => {
  const [cart, setCart] = cartState;

  const cartItem = cart.filter((item) => item.id === id)[0];
  const product = cartItem.product;
  const quantity = cartItem.quantity;

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

  return (
    <div className="cart-card">
      <img className="product-image" src={product.image} alt="Product image" />
      <div className="product-details">
        <h3 className="title">{product.title}</h3>
        <p className="description">{product.description}</p>
        <p className="price">${product.price}</p>
      </div>
      <div className="quantity">
        <QuantitySelector state={[quantity, setQuantity]} minValue={1} />
        <button type="button" onClick={() => removeItem()}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;
