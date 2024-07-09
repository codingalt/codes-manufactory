import React from "react";
import css from "./OurServices.module.scss";
import Cards from "./Cards";

const OurServices = () => {
  return (
    <div className={css.services} id="services">
      <div className="lg:pt-20 lg:pb-28 2xl:pt-28 2xl:pb-28 max-w-screen-xl mx-auto px-4 md:px-20 2xl:px-8">
        <div className={css.content}>
          <div className={css.top}>
            <div className={css.line}></div>
            <p>OUR SERVICES</p>
          </div>
          <div className={css.heading}>
            <div className={css.left}>
              <p>Unlocking Your</p>
              <p>Potential</p>
            </div>
          </div>

          {/* Cards  */}
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
