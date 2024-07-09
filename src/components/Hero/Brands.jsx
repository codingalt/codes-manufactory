import React from 'react'
import css from "./Hero.module.scss"
import profile1 from "../../assets/profile1.png"
import profile2 from "../../assets/profile2.png"
import profile3 from "../../assets/profile3.png";
import brand1 from "../../assets/brand1.png";
import brand2 from "../../assets/brand2.png";
import brand3 from "../../assets/brand3.png";
import brand4 from "../../assets/brand4.png";

const Brands = () => {
  return (
    <div
      className={css.brands}
      data-aos="fade-up"
      data-aos-delay="1050"
      data-aos-duration="1500"
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
        <div className={css.images}>
          <img src={brand1} alt="Brand" />
          <img src={brand2} alt="Brand" />
          <img src={brand3} alt="Brand" />
          <img src={brand4} alt="Brand" />
        </div>
      </div>
    </div>
  );
}

export default Brands