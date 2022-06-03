import Home from "../components/layout/Home";
import News_router from "../components/layout/News_router";
import Productdetails from "../components/layout/Productdetails";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const guestRoutesWithLayout = [
  { path: "/", component: Home },
  { path: "/products", component: () => <p>Products</p> },
  { path: "/news", component: News_router },
  { path: "/aboutus", component: () => <p>About us</p> },
  { path: "/product/:id", component: () => <p>Product detail</p> },
  { path: "/productdetail", component: Productdetails },
];

const guestRoutesWithoutLayout = [
  { path: "/register", component: SignUp },
  { path: "/login", component: Login },
];

const userRoutesWithLayout = [
  { path: "/", component: Home },
  { path: "/register", component: Home },
  { path: "/login", component: Home },
  { path: "/products", component: () => <p>Products</p> },
  { path: "/news", component: News_router },
  { path: "/aboutus", component: () => <p>About us</p> },
  { path: "/product/:id", component: () => <p>Product detail</p> },
  { path: "/productdetail", component: Productdetails },
  { path: "/account", component: () => <p>Account</p> },
  { path: "/cart", component: Cart },
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
