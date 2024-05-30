import React from 'react'
import css from "./FAQ.module.scss";
import FaqAccordion from './FaqAccordion';

const FAQ = () => {
  return (
    <div className={css.faq}>
      <div className="lg:pt-10 lg:pb-24 2xl:pt-10 2xl:pb-24 max-w-screen-xl mx-auto px-4 md:px-20 2xl:px-8">
        <div className={css.content}>
          <div className={css.top}>
            <div className={css.line}></div>
            <p>FAQ</p>
          </div>
          <div className={css.heading}>
            <div className={css.left}>
              <p className="max-w-xl">
                Frequently Asked{" "}
                <span className="text-[#FB7957]">Questions</span>
              </p>
            </div>
          </div>

          {/* Accordion  */}
          <FaqAccordion />
        </div>
      </div>
    </div>
  );
}

export default FAQ