import { Outlet } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar cart={cart} />
      <div className="content">
        <Outlet context={[cart, setCart]} />
      </div>
      <footer>
        &copy; Copyright{" "}
        {new Date().getFullYear() !== 2023
          ? `2023 – ${new Date().getFullYear()}`
          : new Date().getFullYear()}
        , Maksim Stojkovic
      </footer>
    </>
  );
};

export default App;
