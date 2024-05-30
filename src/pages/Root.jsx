import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Copyright from "../components/Footer/Copyright";
import { Outlet } from "react-router-dom";
import ScrollRestore from "../components/ScrollRestore/ScrollRestore";
import "../styles/global.scss";

const Root = () => {
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
