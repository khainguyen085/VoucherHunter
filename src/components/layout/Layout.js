import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import BackToTopBtn from "./BackToTopBtn";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
      <BackToTopBtn />
    </>
  );
};

export default Layout;
