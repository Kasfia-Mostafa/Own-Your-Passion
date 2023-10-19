import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./Pages/Home/Home";
import AddProduct from "./Pages/AddAProduct/AddProduct";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import BrandLogo from "./Pages/Home/Logo/BrandLogo";
import Logo from "./Pages/Home/Logo/Logo";
import AuthProvider from "./Hooks/AuthProvider";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Products from "./Pages/Products/Products";
import Update from "./Pages/Update/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/",
        element: <Logo></Logo>,
      },
      {
        path: "/productShow",
        element: <Products></Products>,
        loader: () => fetch(`http://localhost:5000/products`)
      },
      {
        path: "/addProduct",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
      },
      {
        path: "/updateProduct",
        element:<PrivateRoute><Update></Update></PrivateRoute>,
      },
      {
        path: "/myCart",
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
