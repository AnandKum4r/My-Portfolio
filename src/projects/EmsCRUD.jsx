import ProjectCard from "../components/ProjectCard";
import Aerrow from "../assets/images/aerrow.svg?react";
import projectImage from "../assets/images/EMS-Project2.png?react";

const EmsCRUD = () => {
  return (
    <ProjectCard
      title="EMS Project"
      subtitle="(React + Vite + Tailwind CSS)"
      description="The Employee Management System is a web application built using React + Vite and Tailwind CSS for efficient management of employee data. This system provides a user-friendly interface for adding, updating, and deleting employee information."
      techStack={[
        "react.js",
        "express.js",
        "node.js",
        "SweetAlert2",
        "TailwindCSS",
        "vite",
        "css",
        "html",
        "javascript",
        "figma",
      ]}
      image={projectImage}
      repoLink="https://github.com/AnandKum4r/EMS-Project"
      arrow={<Aerrow />}
      color="#ffe578"
      isLeft={true}
    />
  );
};

export default EmsCRUD;

