import { Outlet } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar cart={cart} />
      <Outlet context={[cart, setCart]} />
    </>
  );
};

export default App;
