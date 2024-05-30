import React, { useEffect, useState } from 'react'
import css from "./Header.module.scss";
import { Logo } from './Logo';
import {Link} from "react-router-dom"

const Header = () => {
    const [state, setState] = useState(false);

    const navigation = [
      { title: "Home", path: "/" },
      { title: "About", path: "#" },
      { title: "Services", path: "#" },
      { title: "Pricing", path: "#" },
    ];

    useEffect(() => {
      document.onclick = (e) => {
        const target = e.target;
        if (!target.closest(".menu-btn")) setState(false);
      };
    }, []);

  return (
      <header>
        <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
          <Logo state={state} setState={setState} />
        </div>
        <nav
          className={`pb-1 md:text-sm ${
            state
              ? "fixed z-50 top-0 inset-x-0 bg-[#060606] bg-opacity-40 rounded-xl mx-2 mt-2 md:mx-0 md:mt-0 md:relative md:bg-transparent"
              : "bg-[#060606] bg-opacity-35 z-50 fixed top-0 left-0 right-0"
          }`}
        >
          <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
            <Logo state={state} setState={setState} /> 
            <div
              className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
                state ? "block" : "hidden"
              } `}
            >
              <ul className="flex-1 justify-end items-center space-y-6 md:flex md:space-x-8 md:space-y-0">
                {navigation.map((item, idx) => {
                  return (
                    <li
                      key={idx}
                      className="text-white text-[16px] font-light hover:text-gray-100"
                    >
                      <Link to={item.path} className="block">
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
                <li>
                  <Link
                    to="#"
                    className="flex items-center justify-center gap-x-1 py-3 px-4 w-[141px] h-[44px] text-white border font-medium bg-transparent duration-150 md:inline-flex"
                  >
                    Contact Now
                 
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
  );
}

export default Header