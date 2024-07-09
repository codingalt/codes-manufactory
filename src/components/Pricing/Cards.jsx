import React from "react";
import { plans } from "./data";
import arrow from "../../assets/arrow-right-circle.png";
import arrowDark from "../../assets/arrow-right-circle-dark.png";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";

const Cards = () => {
  const navigate = useNavigate();
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  return (
    <section className="py-0">
      <div className="max-w-screen-xl mx-auto px-1.5 md:px-6">
        <div className="mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
          {plans?.map((item, idx) => (
            <div
              key={idx}
              className={`relative h-[625px] max-w-[364px] flex-1 flex items-stretch flex-col rounded-lg border border-[#A1AEBF] ${
                idx === 0 ? "mb-14" : "mb-9"
              } md:mb-0 mt-6 sm:mt-0 ${
                item.isMostPop ? "mt-14 md:mt-10 bg-white text-[#111111]" : ""
              }`}
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay={
                isSmallDevice ? 200 : idx === 0 ? 500 : idx === 1 ? 800 : 1000
              }
            >
              {item.isMostPop ? (
                <span className="w-32 absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-full shadow-md bg-[#FB7957] text-center text-white text-sm font-semibold">
                  Most popular
                </span>
              ) : (
                ""
              )}
              <div className="p-8 py-12">
                <span
                  className={`text-white text-[28px] font-semibold`}
                  style={item.isMostPop ? { color: "#111111" } : {}}
                >
                  {item.name}
                </span>
                <p
                  className={`text-gray-300 text-[16px] mt-3 font-extralight ${
                    item.isMostPop ? "text-[#000] font-medium" : ""
                  }`}
                  style={
                    item.isMostPop
                      ? { color: "#111111", fontWeight: "normal" }
                      : {}
                  }
                >
                  {item.desc}
                </p>
                <div
                  className={`text-white text-4xl font-semibold mt-6`}
                  style={item.isMostPop ? { color: "#111111" } : {}}
                >
                  ${item.price}{" "}
                  <span
                    className={`text-xl text-white font-normal`}
                    style={item.isMostPop ? { color: "#111111" } : {}}
                  >
                    /mo
                  </span>
                </div>
                <p
                  className={`text-gray-300 text-[14px] font-light mt-6`}
                  style={item.isMostPop ? { color: "#111111" } : {}}
                >
                  Pause or cancel anytime
                </p>
              </div>
              <div
                className={`w-[80%] h-[1px] bg-[#A1AEBF] mx-auto ${
                  item.isMostPop ? "bg-[#6A6C6D]" : ""
                }`}
              ></div>
              <ul className="p-8 space-y-5 mt-4">
                {item.features.map((featureItem, idx) => (
                  <li
                    key={idx}
                    className={`flex items-center gap-5 text-[#cccccc]`}
                    style={item.isMostPop ? { color: "#171717" } : {}}
                  >
                    <img
                      className="h-6 w-6"
                      src={item.isMostPop ? arrowDark : arrow}
                      alt=""
                    />
                    {featureItem}
                  </li>
                ))}
              </ul>

              <button
                className={`${
                  item.isMostPop ? "" : "hover:bg-white hover:text-default-800"
                } px-3 py-3 mb-8 mt-3 transition-all rounded-lg w-[78%] mx-auto border border-[#A1AEBF] font-semibold text-sm duration-150 text-white bg-transparent`}
                style={
                  item.isMostPop
                    ? { background: "#FB7957", border: "none", color: "#fff" }
                    : {}
                }
                onClick={() => navigate("/selectService")}
              >
                Upgrade
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
