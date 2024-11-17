import LandingPages from "../Pages/LandingPages";

import AuthForm from "../Pages/Auth/AuthForm ";
import Dashboard from "../Pages/Dashboard";
import Error from "../Pages/Error";
import Products from "../Pages/Products";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import ProductsDetails from "../Pages/ProductsDetails";
import { AddtoCart } from "../Components/AddtoCart";

export const routers = [
  {
    path: "/",
    element: <LandingPages />,
  },
  {
    path: "/Signin",
    element: <AuthForm formType="signin" />,
  },
  {
    path: "/Signup",
    element: <AuthForm formType="signup" />,
  },
  {
    path: "/Products",
    element: <Products />,
  },
  {
    path: "/Products/:id",
    element: <ProductsDetails />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
  },
  {
    path: "/AddtoCart",
    element: <AddtoCart />,
  },

  {
    path: "*",
    element: <Error />,
  },
];
