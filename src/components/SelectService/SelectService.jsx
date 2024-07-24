import React from "react";
import css from "./SelectService.module.scss";
import Technologies from "./Technologies";
import ContactForm from "./ContactForm";

const SelectService = () => {
  return (
    <>
      <div className={css.wrapper}>
        {/* Background Blurred Shapes */}
        <div className={css.shape1}></div>
        <div className={css.shape2}></div>

        {/* Content  */}
        <div className={css.content}>
          <div className="lg:pt-16 2xl:pt-24 max-w-screen-xl 3xl:max-w-screen-2xl 3xl:pt-36 3xl:px-5 mx-auto px-4 md:px-8 z-10">
            <div className={css.title}>Let’s Find Your Partner </div>
            <span className={css.subTitle}>Select at least one skill</span>

            <Technologies />

            {/* Contact Form  */}
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectService;
