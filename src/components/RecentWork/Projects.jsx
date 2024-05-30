import React from "react";
import css from "./RecentWork.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {useNavigate} from "react-router-dom"
import  projectsData  from "../../utils/projectsData.json";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className={css.projects}>
      <Carousel
        additionalTransfrom={-430}
        arrows={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        centerMode={true}
        className="carouselContainer"
        containerClass="container-with-dots"
        dotListClass="carouselDots"
        draggable
        focusOnSelect={false}
        infinite
        itemClass="carousel-item-padding-40-px"
        keyBoardControl={true}
        minimumTouchDrag={80}
        pauseOnHover={false}
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        partialVisbile={false}
        customTransition="all 4s"
        transitionDuration={2500}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 2,
            partialVisibilityGutter: -20,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={true}
        rewindWithAnimation={true}
        rtl={false}
        shouldResetAutoplay={true}
        showDots={true}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {projectsData?.map((item, index) => {
          const isEven = (index + 1) % 2 === 0;

          return isEven ? (
            <div
              onClick={() => navigate(`/projects/${item.title}/${item.id}`)}
              className={`${css.carouselItem} ${css.carouselCenterItem}`}
            >
              <div key={index} className={css.image}>
                <img src={item.image} loading="lazy" alt="" />
              </div>
              <div className={css.title}>
                <p>{item.title}</p>
                <span>{item.description}</span>
              </div>
            </div>
          ) : (
            <div
              onClick={() => navigate(`/projects/${item.title}/${item.id}`)}
              key={index}
              className={css.carouselItem}
            >
              <div className={css.image}>
                <img src={item.image} loading="lazy" alt="" />
              </div>
              <div className={css.title}>
                <p>{item.title}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Projects;
