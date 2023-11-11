import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Store from "./components/store/Store";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import ErrorPage from "./components/shared/ErrorPage";

const Router = () => {
  const baseUrl = `/${import.meta.env.BASE_URL.replaceAll("/", "")}`;

  const router = createBrowserRouter([
    {
      path: `${baseUrl}`,
      element: <App />,
      children: [
        {
          path: `${baseUrl}/cart`,
          element: <Store />,
        },
        {
          path: `${baseUrl}/cart`,
          element: <Cart />,
        },
        {
          path: `${baseUrl}/checkout`,
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

// const router = createBrowserRouter([
//   {
//     path: "/vite-react-router/",
//     element: <App />,
//     children: [
//       {
//         path: "/vite-react-router/",
//         element: <Home />,
//       },
//       {
//         path: "/vite-react-router/contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);
