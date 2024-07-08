import React from "react";
import css from "./Testimonial.module.scss";
import { data } from "./data";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { FaStar } from "react-icons/fa";
import { useMediaQuery } from "@uidotdev/usehooks";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const Cards = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  const renderDotsItem = ({ isActive }) => {
    return isActive ? (
      <div className="w-[40px] h-[8px] transition-all ml-2 bg-[#FB7957] rounded-full cursor-pointer"></div>
    ) : (
      <div className="w-[20px] h-[8px] transition-all ml-2 bg-white rounded-full cursor-pointer"></div>
    );
  };

  return (
    <div className={css.cards}>
      <AliceCarousel
        mouseTracking
        responsive={responsive}
        disableButtonsControls
        renderDotsItem={renderDotsItem}
        autoPlay
        autoPlayInterval={isSmallDevice ? 4000 : 4000}
        animationDuration={isSmallDevice ? 1000 : 1500}
        infinite
      >
        {data?.map((item, index) => {
          return (
            <div key={index} className={css.card}>
              <div className={css.review}>{item.review}</div>
              <div className={css.stars}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className={css.line}></div>
              <div className={css.user}>
                <img src={item.profile} loading="lazy" alt="" />
                <div className={css.name}>
                  <p>{item.name}</p>
                  <span>{item.position}</span>
                </div>
              </div>
            </div>
          );
        })}
      </AliceCarousel>
    </div>
  );
};

export default Cards;
