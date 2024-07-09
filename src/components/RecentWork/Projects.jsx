import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useNavigate } from "react-router-dom";
import css from "./RecentWork.module.scss";
import projectsData from "../../utils/projectsData.json";
import { truncateText } from "../../utils/helpers";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { useIntersectionObserver, useMediaQuery } from "@uidotdev/usehooks";

const Projects = () => {
  const navigate = useNavigate();
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    464: { items: 2 },
    1024: { items: 2 },
    1280: { items: 3 },
  };

  const items = projectsData.map((item, index) => {
    const isEven = (index + 1) % 2 === 0;
    return (
      <div
        key={item.id}
        onClick={() => navigate(`/projects/${item.title}/${item.id}`)}
        className={`${css.carouselItem} ${
          isEven ? css.carouselCenterItem : ""
        }`}
      >
        <div className={css.image}>
          <img src={item.image} loading="lazy" alt={item.title} />
        </div>
        <div className={css.title}>
          <p>{item.title}</p>
          {isEven && (
            <span>
              {truncateText(item.description, isSmallDevice ? 40 : 115)}
            </span>
          )}
        </div>
      </div>
    );
  });

  const slidePrev = () => setActiveIndex((prevIndex) => prevIndex - 1);
  const slideNext = () => setActiveIndex((prevIndex) => prevIndex + 1);

  // Custom arrow components
  const CustomPrevButton = ({ onClick }) => (
    <button className={css.customArrow + " " + css.prev} onClick={onClick}>
      <FaChevronLeft />
    </button>
  );

  const CustomNextButton = ({ onClick }) => (
    <button className={css.customArrow + " " + css.next} onClick={onClick}>
      <FaChevronRight />
    </button>
  );

  const syncActiveIndexForSwipeGestures = (e) => setActiveIndex(e.item);

  const onSlideChanged = (e) => {
    syncActiveIndexForSwipeGestures(e);
  };

  const onUpdated = (e) => {};
  return (
    <div
      className={`${css.projects} recentProjects`}
      ref={ref}
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <AliceCarousel
        mouseTracking
        infinite
        autoPlay={entry?.isIntersecting}
        autoPlayInterval={isSmallDevice ? 4000 : 3000}
        animationDuration={isSmallDevice ? 2000 : 3000}
        items={items}
        activeIndex={activeIndex}
        responsive={responsive}
        onSlideChanged={onSlideChanged}
        onUpdated={onUpdated}
        disableDotsControls
        renderPrevButton={() => <CustomPrevButton onClick={slidePrev} />}
        renderNextButton={() => <CustomNextButton onClick={slideNext} />}
      />
    </div>
  );
};

export default Projects;
