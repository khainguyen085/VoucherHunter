import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import authActions from "../../actions/authActions";
import CartPopUp from "./CartPopUp";
import SearchBar from "./SearchBar";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);
  const [showMenu, setShowMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const toggleShowCart = (e) => {
    e.stopPropagation();
    setShowCart((show) => !show);
    if (showAccountMenu) {
      setShowAccountMenu(false);
    }
  };

  const toggleAccountMenu = (e) => {
    e.stopPropagation();
    setShowAccountMenu((show) => !show);
    if (showCart) {
      setShowCart(false);
    }
  };

  const openMenu = () => {
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const logout = () => {
    dispatch(authActions.setLoading());

    setTimeout(() => dispatch(authActions.logout()), 500);
    navigate("/");
  };

  useEffect(() => {
    window.addEventListener("click", (e) => {
      setShowAccountMenu(false);
      setShowCart(false);
    });

    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      if (nav) {
        if (window.scrollY > 90) {
          nav.classList.add("fixed");
        } else {
          nav.classList.remove("fixed");
        }
      }
    });
  }, [user, showAccountMenu, showCart, loading]);

  return (
    <nav>
      <div className="nav-left">
        <i className="bi bi-list" onClick={openMenu}></i>
        <div className="logo" onClick={() => navigate("/")} >
            <p>Voucher HUNTER</p>
        </div>
        <SearchBar />
      </div>
      <div className={`nav-middle ${showMenu ? "show" : ""}`}>
        <div className="menu">
          <button className="exit-btn" onClick={closeMenu}>
            X
          </button>
          <NavLink
            to="./products"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={closeMenu}
          >
            Products
          </NavLink>
          <NavLink
            to="./news"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={closeMenu}
          >
            News
          </NavLink>
          <NavLink
            to="./aboutus"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={closeMenu}
          >
            About us
          </NavLink>
        </div>
        <div className="back-drop" onClick={closeMenu}></div>
      </div>
      <div className="nav-right">
        {user ? (
          <>
            <i
              className="bi bi-bag-heart"
              onClick={(e) => toggleShowCart(e)}
            ></i>
            <div
              className="avt-container"
              onClick={(e) => toggleAccountMenu(e)}
            >
              <img src="image/cat-avt.jpeg" alt="" />
            </div>
            <ul
              onClick={(e) => e.stopPropagation()}
              className={`account-menu ${showAccountMenu ? "show" : ""}`}
            >
              <li
                onClick={(e) => {
                  navigate("/account");
                  toggleAccountMenu(e);
                }}
              >
                My account
              </li>
              <li onClick={logout}>Log out</li>
            </ul>
            <CartPopUp show={showCart} setShowCart={setShowCart} />
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Register
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
