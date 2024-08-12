import React from "react";
import css from "./Footer.module.scss";
import { Logo } from "../Header/Logo";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={css.footer} id="about">
      <div className={css.shape1}></div>
      <div className="lg:pt-10 lg:pb-20 2xl:pt-10 2xl:pb-20 max-w-screen-xl mx-auto px-3 md:px-4">
        <footer className="footer bg-transparent mb-0 p-10 bg-base-200 text-base-content">
          <aside>
            <Logo hideMenu={true} />
            <p className="text-white mt-2">
              Labors of Tech.
              <br />
              Providing reliable tech since 2020
            </p>
          </aside>
          <nav className="space-y-2">
            <h6 className="footer-title text-white">Services</h6>
            <a className="link link-hover text-white">Branding</a>
            <a className="link link-hover text-white">Design</a>
            <a className="link link-hover text-white">Marketing</a>
            <a className="link link-hover text-white">Advertisement</a>
          </nav>
          <nav className="space-y-2">
            <h6 className="footer-title text-white">Legal</h6>
            <a className="link link-hover text-white">Terms of use</a>
            <a className="link link-hover text-white">Privacy policy</a>
            <a className="link link-hover text-white">Cookie policy</a>
          </nav>
          <form>
            <h6
              style={{ color: "#fff !important" }}
              className="footer-title text-white uppercase text-center"
            >
              Follow us on
            </h6>
            <div className="flex space-x-5 mb-10 text-2xl">
              <Link
                to={`https://www.facebook.com/profile.php?id=61563334036624&_rdc=1&_rdr`}
                target="_blank"
              >
                <FaFacebook className="text-white cursor-pointer" />
              </Link>
              <Link
                to={`https://www.instagram.com/laborsoftech/?igsh=MXNodXk0anozMjh0eA%3D%3D`}
                target="_blank"
              >
                <FaInstagram className="text-white cursor-pointer" />
              </Link>
              <Link
                to={`https://www.linkedin.com/company/labors-of-tech/`}
                target="_blank"
              >
                <FaLinkedin className="text-white cursor-pointer" />
              </Link>
            </div>
            <div className="max-w-sm flex items-center border bg-white rounded-xl p-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2.5 outline-none"
              />
              <button
                type="button"
                className="p-2.5 rounded-xl w-36 font-semibold text-md text-white bg-[#FB7957] outline-none shadow-md focus:shadow-none sm:px-5"
              >
                Send
              </button>
            </div>
          </form>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
