import React from "react";
import css from "./Hero.module.scss";
import profile1 from "../../assets/profile1.png";
import profile2 from "../../assets/profile2.png";
import profile3 from "../../assets/profile3.png";
import brand1 from "../../assets/b1.svg";
import brand2 from "../../assets/b2.svg";
import brand3 from "../../assets/b3.svg";

const Brands = () => {
  return (
    <div
      className={`${css.brands} max-w-screen-xl 3xl:max-w-screen-2xl mx-auto px-4 md:px-9 2xl:px-0 3xl:px-5`}
    >
      <div className={css.leftSide}>
        <div className={css.images}>
          <img src={profile1} alt="Profile" />
          <img src={profile2} alt="Profile" />
          <img src={profile3} alt="Profile" />
        </div>
        <p className="text-tiny md:text-sm w-64 font-light">
          Join over 30+ happy customers and book a demo today
        </p>
      </div>
      <div className={css.rightSide}>
        <div className={`${css.images} scrollbar-hide overflow-x-auto`}>
          <img src={brand1} alt="Brand" />
          <img src={brand2} alt="Brand" />
          <img src={brand3} alt="Brand" />
        </div>
      </div>
    </div>
  );
};

export default Brands;
