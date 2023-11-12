import StoreCard from "./StoreCard";
import { useOutletContext } from "react-router-dom";

const Store = () => {
  const [cart, setCart] = useOutletContext();

  return (
    <>
      <h2>Welcome to Real Store</h2>

      {[...Array(6).keys()].map((index) => (
        <StoreCard key={index + 1} id={index + 1} cartState={[cart, setCart]} />
      ))}
    </>
  );
};

export default Store;
