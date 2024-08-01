import React, { lazy, Suspense } from "react";
import { createBrowserRouter, defer, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Layout/Menu/Layout";
import Cart from "./pages/Cart/Cart";
import ErrorPage from "./pages/Error/Error";
import Product from "./pages/Product/Product";
import axios from "axios";
import { PREFIX } from "./helpers/API";
const Menu = lazy(() => import("./pages/Menu/Menu"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<>Загрузка...</>}>
            <Menu />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product/:id",
        element: <Product />,
        errorElement: <>Ошибка</>,
        loader: async ({ params }) => {
          return defer({
            data: await axios.get(`${PREFIX}/products/${params.id}`).then(data => data)
          });
        },
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
