import { Navigate } from "react-router-dom";
import AboutUs from "../components/layout/AboutUs";
import Home from "../components/layout/Home";
import News_router from "../components/layout/News_router";
import Productdetails from "../components/layout/Productdetails";
import Cart from "../pages/Cart";
import CheckOutPage from "../pages/CheckOutPage";
import Login from "../pages/Login";
import ProductPage from "../pages/ProductPage";
import SignUp from "../pages/SignUp";

const guestRoutesWithLayout = [
  { path: "/", component: Home },
  { path: "/products", component: ProductPage },
  { path: "/news", component: News_router },
  { path: "/aboutus", component: AboutUs },
  { path: "/product/:id", component: () => <p>Product detail</p> },
  { path: "/productdetail", component: Productdetails },
  { path: "/checkout", component: () => <Navigate to="/login" />},
  { path: "/cart", component: () => <Navigate to="/login" />}
];

const guestRoutesWithoutLayout = [
  { path: "/register", component: SignUp },
  { path: "/login", component: Login },
];

const userRoutesWithLayout = [
  { path: "/", component: Home },
  { path: "/register", component: () => <Navigate to="/" /> },
  { path: "/login", component: () => <Navigate to="/" /> },
  { path: "/products", component: ProductPage },
  { path: "/news", component: News_router },
  { path: "/aboutus", component: AboutUs },
  { path: "/product/:id", component: Productdetails },
  { path: "/productdetail", component: Productdetails },
  { path: "/account", component: () => <p>Account</p> },
  { path: "/cart", component: Cart },
  { path: "/checkout", component: CheckOutPage },
];

const userRoutesWithoutLayout = [];

const routes = {
  guest: {
    withLayout: guestRoutesWithLayout,
    withoutLayout: guestRoutesWithoutLayout,
  },
  user: {
    withLayout: userRoutesWithLayout,
    withoutLayout: userRoutesWithoutLayout,
  },
};

export default routes;
