import React from "react";
import css from "./Hero.module.scss";
import arrow from "../../assets/arrow.svg"
import { FaArrowRight, FaArrowRightLong } from "react-icons/fa6";
import Brands from "./Brands";

const Hero = () => {
  return (
    <div className={css.wrapper} data-scroll data-scroll-speed="0.5">
      {/* Background grid  */}
      <div className="absolute h-full w-full min-h-screen bg-[#060606] overflow-hidden">
        <div className="absolute opacity-[0.55] -z-0 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#1B1B1B_1px,transparent_1px),linear-gradient(to_bottom,#1B1B1B_1px,transparent_1px)] bg-[size:57px_57px]"></div>
      </div>

      {/* Background Blurred Shapes */}
      <div className={css.shape1}></div>
      <div className={css.shape2}></div>

      {/* Content  */}
      <div className={css.content}>
        <div className="lg:pt-12 2xl:pt-24 max-w-screen-xl mx-auto px-4 md:px-14">
          <div className={css.inner}>
            <div
              className={css.leftText}
              data-aos="fade-up-right"
              data-aos-delay="500"
              data-aos-duration="1300"
            >
              <p>We Design</p>
              <p>Unique</p>
            </div>
            <div
              className={css.arrow}
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1400"
            >
              <img src={arrow} alt="arrow" />
            </div>
            <div
              className={css.rightText}
              data-aos="fade-up-left"
              data-aos-delay="500"
              data-aos-duration="1300"
            >
              <p>Digital</p>
              <p>Experiences</p>
            </div>
          </div>

          <div
            className={css.description}
            data-aos="fade-up"
            data-aos-delay="700"
            data-aos-duration="1600"
          >
            <p className="md:max-w-md lg:max-w-xl">
              We make awesome websites that help you reach more people, sell
              more products. Our websites are designed to make sure you succeed.
            </p>
          </div>

          <div className={css.buttons}>
            <button
              data-aos="fade-right"
              data-aos-delay="950"
              data-aos-duration="1600"
            >
              Get Started
            </button>
            <button
              data-aos="fade-left"
              data-aos-delay="950"
              data-aos-duration="1600"
            >
              Let's Chat <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Brands  */}
      <Brands />
    </div>
  );
};

export default Hero;
