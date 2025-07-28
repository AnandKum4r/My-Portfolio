import Aerrow from "../assets/images/aerrow.svg?react";
import projectImage from "../assets/images/ExpenseTracker.png?react";
import ProjectCard from "../components/ProjectCard";

const ExpenseTracker = () => {
  return (
    <>
      <ProjectCard
        title="Expense Tracker"
        subtitle="(React + Vite + Tailwind CSS)"
        description="The Expense Tracker is a web application built using React + Vite and Tailwind CSS for tracking personal expenses. It provides a user-friendly interface for adding, updating, and deleting expense records."
        techStack={[
          "react.js",
          "express.js",
          "node.js",
          "TailwindCSS",
          "vite",
          "css",
          "html",
          "javascript",
          "figma",
        ]}
        image={projectImage}
        repoLink="https://github.com/AnandKum4r/Expense-Tracker"
        arrow={<Aerrow />}
        color="#ffe578"
        isLeft={true}
      />
    </>
  );
};

export default ExpenseTracker;
