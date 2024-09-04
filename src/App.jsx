import { CartPage, HomePage, ProductPage } from "./pages";
import Layout from "./components/layout/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductId from "./pages/[ProductId]";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      { index: true, element: <HomePage /> },
      {
        path: "Product",
        element: <ProductPage />,
      },
      {
        path: "CartPage",
        element: <CartPage />,
      },
      {
        path: "ProductId/:id",
        element: <ProductId />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
