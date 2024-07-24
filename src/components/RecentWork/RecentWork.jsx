import React from "react";
import css from "./RecentWork.module.scss";
import { FaArrowRight } from "react-icons/fa6";
import Projects from "./Projects";

const RecentWork = () => {
  return (
    <div className={css.recentWork}>
      <div className="md:pt-16 pt-12 max-w-screen-xl mx-auto px-4 md:px-11 3xl:max-w-screen-2xl 2xl:px-0 3xl:px-3">
        <div className={css.top} data-aos="fade-right" data-aos-duration="500">
          <div className={css.line}></div>
          <p>Recent Work</p>
        </div>
        <div className={css.heading} data-aos="fade-up" data-aos-duration="550">
          <div className={css.left}>
            <p>Explore Our Latest</p>
            <p>Projects</p>
          </div>
          <div className={css.right}>
            <button>
              Get Started <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Projects  */}
      <Projects />
    </div>
  );
};

export default RecentWork;
