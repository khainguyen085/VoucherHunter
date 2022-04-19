import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import CartPopUp from "./CartPopUp";

const NavBar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const isAuthenticated = true;

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

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (isAuthenticated) {
        const accountMenu = document.querySelector(".account-menu");
        const cart = document.querySelector(".cart-pop-up");

        if (
          showAccountMenu &&
          !accountMenu.isEqualNode(e.target) &&
          !accountMenu.contains(e.target)
        ) {
          setShowAccountMenu(false);
        }

        if (
          showCart &&
          !cart.isEqualNode(e.target) &&
          !cart.contains(e.target)
        ) {
          setShowCart(false);
        }
      }
    });

    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      if (window.scrollY > 90) {
        nav.classList.add("fixed");
      } else {
        nav.classList.remove("fixed");
      }
    });

    //eslint-disable-next-line
  }, [isAuthenticated, showAccountMenu, showCart]);

  return (
    <nav>
      <div className="nav-left">
        <i className="bi bi-list" onClick={openMenu}></i>
        <img src="image/logo.png" alt="" onClick={() => navigate("/")} />
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
        {isAuthenticated ? (
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
            <ul className={`account-menu ${showAccountMenu ? "show" : ""}`}>
              <li
                onClick={(e) => {
                  navigate("/account");
                  toggleAccountMenu(e);
                }}
              >
                My account
              </li>
              <li>Log out</li>
            </ul>
            <CartPopUp show={showCart} />
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
