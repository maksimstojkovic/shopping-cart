import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Store from "./components/store/Store";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import ErrorPage from "./components/shared/ErrorPage";

const Router = () => {
  const baseUrl = `/${import.meta.env.BASE_URL.replaceAll("/", "")}`;

  const router = createBrowserRouter([
    {
      path: `${baseUrl}`,
      element: <Store />,
      children: [],
    },
    {
      path: `${baseUrl}/cart`,
      element: <Cart />,
    },
    {
      path: `${baseUrl}/checkout`,
      element: <Checkout />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
