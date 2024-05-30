import React from "react";
import css from "./ViewProject.module.scss";
import problemImage from "../../assets/problem.png";
import solution from "../../assets/solution.png";

const ProblemSolutionSection = ({ problem,content }) => {
  return (
    <div
      style={
        problem
          ? { flexDirection: "row" }
          : {
              flexDirection: "row-reverse",
              justifyContent: "flex-end",
              marginLeft: "auto",
            }
      }
      className={`${css.problem} max-w-screen-md`}
    >
      <div className={`${css.left}`}>
        <p>{problem ? "Problem :" : "Solution :"}</p>
        <span>{content}</span>
      </div>
      <div className={css.right}>
        <img src={problem ? problemImage : solution} alt="Picture" />
      </div>
    </div>
  );
};

export default ProblemSolutionSection;
