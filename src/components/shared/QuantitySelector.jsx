import { useState } from "react";
import "../../styles/QuantitySelector.scss";

const QuantitySelector = ({
  state,
  initialValue = 1,
  minValue = 0,
  maxValue = Infinity,
}) => {
  const [quantity, setQuantity] = state;

  return (
    <div className="quantity-selector">
      <button
        type="button"
        className="decrease"
        onClick={() =>
          setQuantity((quantity) => Math.max(quantity - 1, minValue))
        }
      >
        <img src="minus-thick.svg" alt="Minus sign" />
      </button>
      <input
        type="number"
        name="quantity"
        id="quantity"
        value={quantity}
        min={minValue}
        max={maxValue}
        onChange={(event) => setQuantity(event.target.value)}
      />
      <button
        type="button"
        className="increase"
        onClick={() =>
          setQuantity((quantity) => Math.min(quantity + 1, maxValue))
        }
      >
        <img src="plus-thick.svg" alt="Plus sign" />
      </button>
    </div>
  );
};

export default QuantitySelector;
