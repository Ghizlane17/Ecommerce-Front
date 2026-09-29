import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/layout/Layout";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
    ],
  },
]);

export default router;