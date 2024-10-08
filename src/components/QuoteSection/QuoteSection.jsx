import React from "react";
import css from "./QuoteSection.module.scss";
import { Form } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const QuoteSection = () => {
  return (
    <div className={css.quotesWrapper} id="contact">
      <div className="md:py-10 lg:py-0 lg:pt-20 lg:pb-28 2xl:pt-28 2xl:pb-28 max-w-screen-xl mx-auto px-4 md:px-20 2xl:px-8">
        <div className={css.content}>
          <div className={css.left}>
            <div className={css.top} data-aos="fade-up" data-aos-duration="500">
              <div className={css.line}></div>
              <p>Why Choose Us</p>
            </div>
            <div className={css.heading}>
              <div
                className={css.left}
                data-aos="fade-up"
                data-aos-duration="600"
              >
                <p>We have a depth of</p>
                <p>Experience</p>
              </div>
              <div
                className={`${css.bottom} max-w-lg`}
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-offset="0"
              >
                Backed by a team of seasoned professionals with diverse skill
                sets, we boast a rich portfolio of successful projects spanning
                various industries. Our commitment to staying at the forefront
                of technology ensures that we consistently deliver cutting-edge
                solutions tailored to our clients' unique needs.
              </div>
            </div>
          </div>
          <div className={css.right}>
            <Form>
              <input
                type="text"
                placeholder="Email"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-offset="50"
              />
              <textarea
                cols="30"
                rows="7"
                placeholder="Describe your project"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-offset="50"
              ></textarea>
              <button>
                Get a Quote <FaArrowRight />
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteSection;
