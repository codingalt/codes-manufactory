import React, { useEffect, useState } from "react";
import css from "./ViewProject.module.scss";
import ProblemSolutionSection from "./ProblemSolutionSection";
import ProjectImages from "./ProjectImages";
import Projects from "./Projects";
import {useParams} from "react-router-dom"
// import { projectsData } from "../../utils/projectsData";
import projectsData from "../../utils/projectsData.json";
import { ParallaxScrollDemo } from "./ParallaxScrollDemo";

const ViewProject = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState();

  useEffect(()=>{
   const filteredData = projectsData?.filter(
     (item) => item.id === parseInt(projectId)
   );
   setProject(filteredData && filteredData[0])
  },[projectId]);

  return (
    <>
      <div className={css.wrapper}>

        {/* Background Blurred Shapes */}
        <div className={css.shape1}></div>
        <div className={css.shape2}></div>

        {/* Content  */}
        <div className={css.content}>
          <div className="lg:pt-16 2xl:pt-24 max-w-screen-xl mx-auto px-4 md:px-8 lg:px-14">
            <div className={css.title}>{project?.title}</div>

            <div className="max-w-screen-md">
              <div className={css.projectDetail}>
                <div className={css.item}>
                  <p>Client : </p>
                  <span>{project?.client}</span>
                </div>
                <div className={css.item}>
                  <p>Industry : </p>
                  <span>{project?.industry}</span>
                </div>
              </div>
              <div className={css.projectDetail}>
                <div className={css.item}>
                  <p>Role : </p>
                  <span>{project?.role}</span>
                </div>
              </div>
            </div>

            {/* Problem  */}
            <ProblemSolutionSection problem={true} content={project?.problem} />

            {/* Solution  */}
            <ProblemSolutionSection problem={false} content={project?.solution} />
          </div>
        </div>
      </div>

      {/* Project Images  */}
      {/* <ProjectImages /> */}
      <div className="w-full lg:mt-[7rem] 2xl:mt-[13rem] mb-[10rem] px-4 lg:px-10 2xl:px-0">
      <ParallaxScrollDemo images={project} />
      </div>
      {/* <Projects
        galleryID="my-test-gallery"
        images={[
          {
            largeURL:
              "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            thumbnailURL:
              "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            width: 1875,
            height: 2500,
          },
          {
            largeURL:
              "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            thumbnailURL:
              "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            width: 1669,
            height: 2500,
          },
          {
            largeURL:
              "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            thumbnailURL:
              "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            width: 2500,
            height: 1666,
          },
        ]}
      /> */}
    </>
  );
};

export default ViewProject;
