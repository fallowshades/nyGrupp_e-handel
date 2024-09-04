import { CartItem } from "./pages";
import { ProductPage } from "./pages";
import { HomePage } from "./pages";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductId from "./pages/[ProductId]";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,

    children: [
      {
        path: "/Product",
        element: <ProductPage />,
      },
      {
        path: "/CartItem",
        element: <CartItem />,
      },
      {
        path: "/ProductId/:id",
        element: <ProductId />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
