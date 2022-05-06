import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import BackToTopBtn from "./BackToTopBtn";
import News from "./News";
import Newletter from "./Newletter";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <News />
      <Newletter />
      <Footer />
      <BackToTopBtn />
    </>
  );
};

export default Layout;
