import React from "react";
import css from "./Pricing.module.scss";
import Cards from "./Cards";

const Pricing = () => {
  return (
    <div className={css.pricing} id="pricing">
      {/* Background grid  */}
      <div className="absolute h-[100%] w-full overflow-hidden">
        <div className="absolute -z-0 bottom-0 left-0 right-0 top-[59%] opacity-[0.3] bg-[linear-gradient(to_right,#1B1B1B_1px,transparent_1px),linear-gradient(to_bottom,#1B1B1B_1px,transparent_1px)] bg-[size:57px_57px]"></div>
      </div>
      <div className={css.shape1}></div>
      <div className="lg:pt-20 lg:pb-28 2xl:pt-28 2xl:pb-28 max-w-screen-xl mx-auto px-4 md:px-20 2xl:px-8">
        <div className={css.content}>
          <div className={css.top}>
            <div className={css.line}></div>
            <p>PRICING</p>
          </div>
          <div className={css.heading}>
            <div className={css.left}>
              <p className="max-w-md">
                <span className="text-[#FB7957]">Select </span>A Plan That’s
                Right For YOu
              </p>
            </div>
          </div>

          {/* Pricing Cards */}
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
