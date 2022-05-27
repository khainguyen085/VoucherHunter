import Home from "../components/layout/Home";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const guestRoutesWithLayout = [
  { path: "/", component: Home },
  { path: "/products", component: () => <p>Products</p> },
  { path: "/news", component: () => <p>News</p> },
  { path: "/aboutus", component: () => <p>About us</p> },
  { path: "/product/:id", component: () => <p>Product detail</p> },
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
  { path: "/news", component: () => <p>News</p> },
  { path: "/aboutus", component: () => <p>About us</p> },
  { path: "/product/:id", component: () => <p>Product detail</p> },
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
