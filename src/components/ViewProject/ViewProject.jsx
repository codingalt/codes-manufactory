import React, { useEffect, useState } from "react";
import css from "./ViewProject.module.scss";
import ProblemSolutionSection from "./ProblemSolutionSection";
import ProjectImages from "./ProjectImages";
import Projects from "./Projects";
import { useParams } from "react-router-dom";
import { projectsData } from "../../utils/projectsData";
import { ParallaxScrollDemo } from "./ParallaxScrollDemo";

const ViewProject = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState();

  useEffect(() => {
    const filteredData = projectsData?.filter(
      (item) => item.id === parseInt(projectId)
    );
    setProject(filteredData && filteredData[0]);
  }, [projectId]);

  return (
    <>
      <div className={css.wrapper}>
        {/* Background Blurred Shapes */}
        <div className={css.shape1}></div>
        <div className={css.shape2}></div>

        {/* Content  */}
        <div className={css.content}>
          <div className="lg:pt-16 2xl:pt-24 max-w-screen-xl 3xl:max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-8 3xl:px-5 3xl:pt-36">
            <div className={css.title} data-aos="fade-up" data-aos-delay="200">
              {project?.title}
            </div>

            <div className="max-w-screen-md">
              <div className={css.projectDetail}>
                <div
                  className={css.item}
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="600"
                >
                  <p>Client : </p>
                  <span>{project?.client}</span>
                </div>
                <div
                  className={css.item}
                  data-aos="fade-left"
                  data-aos-delay="300"
                  data-aos-duration="600"
                >
                  <p>Industry : </p>
                  <span>{project?.industry}</span>
                </div>
              </div>
              <div className={css.projectDetail}>
                <div
                  className={css.item}
                  data-aos="fade-right"
                  data-aos-delay="400"
                  data-aos-duration="600"
                >
                  <p>Role : </p>
                  <span>{project?.role}</span>
                </div>
              </div>
            </div>

            {/* Problem  */}
            <ProblemSolutionSection problem={true} content={project?.problem} />

            {/* Solution  */}
            <ProblemSolutionSection
              problem={false}
              content={project?.solution}
            />
          </div>
        </div>
      </div>

      {/* Project Images  */}
      <div className="w-full lg:mt-[7rem] 2xl:mt-[13rem] 3xl:mt-[5rem] mb-[0rem] sm:mb-[10rem] px-4 lg:px-10 2xl:px-0">
        <ParallaxScrollDemo images={project} />
      </div>
     
    </>
  );
};

export default ViewProject;
