import React, { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { HashLink as Link } from "react-router-hash-link";
import { useMediaQuery } from "@uidotdev/usehooks";

const Header = () => {
  const [state, setState] = useState(false);
  const [activeLink, setActiveLink] = useState(
    window.location.hash || window.location.pathname
  );
  const [pathname, setPathname] = useState(window.location.pathname);
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const isExtraLargeDevice = useMediaQuery(
    "only screen and (min-width : 1201px) and (max-width : 1580px)"
  );

  const navigation = [
    {
      title: "Home",
      path:
        pathname.includes("/projects") || pathname.includes("/selectService")
          ? "/"
          : "#",
    },
    { title: "Services", path: "#services" },
    // { title: "Pricing", path: "#pricing" },
    { title: "About", path: "#about" },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };

    const handleHashChange = () => {
      setActiveLink(window.location.hash || window.location.pathname);
      setPathname(window.location.pathname);
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("popstate", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handleHashChange);
    };
  }, []);

  const handleSetActive = (path) => {
    setActiveLink(path);
  };

  return (
    <header>
      <div
        className={`md:hidden transition-all ${
          state ? "mx-2 pb-4 opacity-0 hidden" : "hidden"
        }`}
      >
        <Logo state={state} setState={setState} isSmallDevice={isSmallDevice} />
      </div>
      <nav
        className={`pb-0 md:px-7 md:text-sm duration-700 transition-all ease-soft-spring ${
          state
            ? "fixed opacity-100 z-50 top-0 inset-x-0 bg-[#060606] bg-opacity-70 rounded-none md:mx-0 md:mt-0 md:relative md:bg-transparent pb-10"
            : "bg-[#060606] bg-opacity-55 z-50 fixed top-0 left-0 right-0"
        }`}
      >
        <div
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-duration="700"
          className="gap-x-14 md:gap-x-6 lg:gap-x-14 items-center max-w-screen-xl 3xl:max-w-screen-2xl mx-auto px-5 md:flex md:px-1 lg:px-8 2xl:px-0 3xl:px-5"
        >
          <Logo
            state={state}
            setState={setState}
            isSmallDevice={isSmallDevice}
            isExtraLargeDevice={isExtraLargeDevice}
          />
          <div
            className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
              state ? "block" : "hidden"
            } `}
          >
            <ul className="flex-1 justify-end items-center space-y-6 md:flex md:space-x-7 2xl:space-x-8 md:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="relative group text-white lg:text-[15px] 2xl:text-[16px] font-light"
                  >
                    <Link
                      smooth
                      to={item.path}
                      onClick={() => handleSetActive(item.path)}
                      className="block group-hover:text-gray-100 transition-colors"
                    >
                      {item.title}
                    </Link>
                    <span
                      className={`absolute -bottom-1 left-0 w-0 h-0.5 rounded-full bg-[#fff] transition-all duration-400 ${
                        activeLink === item.path
                          ? "w-[19%] md:w-full"
                          : "group-hover:w-[19%] md:group-hover:w-full"
                      }`}
                    ></span>
                  </li>
                );
              })}
              <li>
                <Link
                  to="https://wa.me/923067111557"
                  className="flex items-center justify-center gap-x-1 py-3 px-4 h-[40px] mx-auto mt-10 md:mt-0 lg:h-[38px] w-[85%] md:w-[150px] lg:w-[138px] 2xl:w-[141px] 2xl:h-[44px] text-white border font-medium bg-transparent duration-150 md:inline-flex transition-all hover:bg-white hover:text-default-800"
                  target="_blank"
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
};

export default Header;
