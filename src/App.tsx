import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./components/Cart";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Body />
      </>
    ),
    errorElement: <Error />,
  },

  {
    path: "/contact",
    element: (
      <>
        <Header />
        <Contact />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Header />
        <About />
      </>
    ),
  },
  {
    path: "/restaurants/:resId",
    element: (
      <>
        <Header />
        <RestaurantMenu />
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
        <Header />
        <Cart />
      </>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
);
