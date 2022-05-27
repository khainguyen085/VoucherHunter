import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import BackToTopBtn from "./BackToTopBtn";
import NewLetter from './Newletter';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <NewLetter />
      <Footer />
      <BackToTopBtn />
    </>
  );
};

export default Layout;
