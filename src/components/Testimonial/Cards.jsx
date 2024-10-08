import React from "react";
import css from "./Testimonial.module.scss";
import { data } from "./data";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { FaStar } from "react-icons/fa";
import { useIntersectionObserver, useMediaQuery } from "@uidotdev/usehooks";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const Cards = () => {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  const renderDotsItem = ({ isActive }) => {
    return isActive ? (
      <div className="w-[30px] h-[6px] transition-all ml-2 bg-[#FB7957] rounded-full cursor-pointer"></div>
    ) : (
      <div className="w-[15px] h-[6px] transition-all ml-2 bg-white bg-opacity-85 rounded-full cursor-pointer"></div>
    );
  };

  return (
    <div className={css.cards} ref={ref}>
      <AliceCarousel
        mouseTracking
        responsive={responsive}
        disableButtonsControls
        renderDotsItem={renderDotsItem}
        autoPlay={entry?.isIntersecting}
        autoPlayStrategy="all"
        autoPlayInterval={isSmallDevice ? 3000 : 3000}
        animationDuration={isSmallDevice ? 500 : 1500}
        infinite
      >
        {data?.map((item, index) => {
          return (
            <div
              key={index}
              className={css.card}
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay={
                isSmallDevice
                  ? 200
                  : index === 0
                  ? 500
                  : index === 1
                  ? 800
                  : 1000
              }
              data-aos-offset="0"
            >
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
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black bg-opacity-35">
                  <img
                    className="w-[61%] object-cover"
                    src={item.profile}
                    loading="lazy"
                    alt=""
                  />
                </div>
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
