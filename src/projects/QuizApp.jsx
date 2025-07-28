import Aerrow from "../assets/images/aerrow.svg?react";
import projectImage from "../assets/images/QuizApp.png?react";
import ProjectCard from "../components/ProjectCard";

const QuizApp = () => {
  return (
    <>
    <ProjectCard
      title="Quiz App"
      subtitle="(JavaScript Quiz Application)"
      description="The Quiz App is a simple and interactive web application built using
            HTML, CSS, and JavaScript. It allows users to answer multiple-choice
            questions and navigate through a series of quiz questions."
      techStack={[
        "react.js",
        "express.js",
        "node.js",
        "tailwindCSS",
        "vite",
        "html",
        "css",
        "javascript",
        "figma",
      ]}
      image={projectImage}
      repoLink="https://github.com/AnandKum4r/Quiz-App"
      arrow={<Aerrow />}
      color="#459bd5"
      isLeft={false}
    />
    </>
  );
};

export default QuizApp;
