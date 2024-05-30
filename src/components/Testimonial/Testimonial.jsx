import React from "react";
import css from "./Testimonial.module.scss";
import Cards from "./Cards";

const Testimonial = () => {
  return (
    <div className={css.testimonialWrap}>
      <div className="lg:pt-20 lg:pb-24 2xl:pt-28 2xl:pb-24 max-w-screen-xl mx-auto px-4 md:px-20 2xl:px-8">
        <div className={css.content}>
          <div className={css.top}>
            <div className={css.line}></div>
            <p>TESTIMONIALS</p>
          </div>
          <div className={css.heading}>
            <div className={css.left}>
              <p className="max-w-xl">
                Don’t Take Our Words For It Trust Our{" "}
                <span className="text-[#FB7957]">Customers</span>
              </p>
            </div>
          </div>

          {/* Cards  */}
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
