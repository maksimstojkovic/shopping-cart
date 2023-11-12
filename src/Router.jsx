import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Store from "./components/store/Store";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import ErrorPage from "./components/shared/ErrorPage";

const Router = () => {
  const baseUrl = import.meta.env.BASE_URL;

  const router = createBrowserRouter([
    {
      path: baseUrl,
      element: <App />,
      children: [
        {
          path: "",
          element: <Store />,
        },
        {
          path: `cart`,
          element: <Cart />,
        },
        {
          path: `checkout`,
          element: <Checkout />,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
