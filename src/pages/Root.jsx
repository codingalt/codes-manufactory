import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Copyright from "../components/Footer/Copyright";
import { Outlet } from "react-router-dom";
import ScrollRestore from "../components/ScrollRestore/ScrollRestore";
import "../styles/global.scss";
import ScrollComponent from "../components/ScrollComponent/ScrollComponent";
import AOS from "aos";
import "aos/dist/aos.css";

const Root = () => {
  
    useEffect(() => {
      AOS.init();
    }, []);

  return (
    <>
      <ScrollRestore />
      <Header />
      <Outlet />
      <Footer />
      <Copyright />
    </>
  );
};

export default Root;
