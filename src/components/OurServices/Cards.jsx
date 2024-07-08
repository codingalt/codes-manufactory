import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import css from "./OurServices.module.scss";
import { data } from "./data";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
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
        autoPlayInterval={isSmallDevice ? 2500 : 3000}
        animationDuration={isSmallDevice ? 1000 : 1500}
        infinite
      >
        {data?.map((item, index) => {
          return (
            <div
              style={index === 0 ? { background: "#FB7957" } : {}}
              key={index}
              className={css.card}
            >
              <img
                className="w-[56px]"
                loading="lazy"
                src={item.image}
                alt=""
              />
              <p>{item.title}</p>
              <span>{item.description}</span>
            </div>
          );
        })}
      </AliceCarousel>
    </div>
  );
};

export default Cards;
