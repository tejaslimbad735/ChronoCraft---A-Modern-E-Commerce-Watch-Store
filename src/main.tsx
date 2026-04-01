import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { Provider } from "react-redux";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage.tsx";
import { Shop } from "./pages/Shop.tsx";
import { Home } from "./pages/Home.tsx";
import { Checkout } from "./pages/Checkout.tsx";
import { ProductInfo } from "./pages/ProductInfo.tsx";
import { store } from "./store/index.tsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "leaflet/dist/leaflet.css";
import { OrderPlaced } from "./pages/OrderPlaced.tsx";
import { Boutiques } from "./pages/Boutiques.tsx";
import { New } from "./pages/New.tsx";
import { Login } from "./pages/Login.tsx";
import { Signup } from "./pages/Signup.tsx";
import { Search } from "./pages/Search.tsx";
import { Favorites } from "./pages/Favorites.tsx";
import { ShowcaseDetail } from "./pages/ShowcaseDetail.tsx";
import { NewArrivalDetail } from "./pages/NewArrivalDetail.tsx";
import { MenProductDetail } from "./pages/MenProductDetail.tsx";
import { Trending } from "./pages/Trending.tsx";
import { WomenProductDetail } from "./pages/WomenProductDetail.tsx";
import { CategoryShowcaseDetail } from "./pages/CategoryShowcaseDetail.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/shop/:productId",
        element: <ProductInfo />,
      },
      {
        path: "/cart",
        element: <Checkout />,
      },
      {
        path: "/orderplaced",
        element: <OrderPlaced />,
      },
      {
        path: "/boutiques",
        element: <Boutiques />,
      },
      {
        path: "/new",
        element: <New />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/men/:menId",
        element: <MenProductDetail />,
      },
      {
        path: "/women/:womenId",
        element: <WomenProductDetail />,
      },
      {
        path: "/trending",
        element: <Trending />,
      },
      {
        path: "/discover/:section/:itemId",
        element: <ShowcaseDetail />,
      },
      {
        path: "/new-arrivals/:arrivalId",
        element: <NewArrivalDetail />,
      },
      {
        path: "/category/:categoryId",
        element: <CategoryShowcaseDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);
