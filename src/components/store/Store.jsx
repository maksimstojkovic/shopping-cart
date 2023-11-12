import StoreCard from "./StoreCard";
import { useOutletContext } from "react-router-dom";

const Store = () => {
  const [cart, setCart] = useOutletContext();

  return (
    <>
      <header>
        <h2>Welcome to Real Store</h2>
      </header>

      <div className="store-cards">
        {[...Array(20).keys()].map((index) => (
          <StoreCard
            key={index + 1}
            id={index + 1}
            cartState={[cart, setCart]}
          />
        ))}
      </div>
    </>
  );
};

export default Store;
