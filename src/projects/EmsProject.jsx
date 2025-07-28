import ProjectCard from "../components/ProjectCard";
import Aerrow from "../assets/images/aerrow.svg?react";
import projectImage from "../assets/images/EMS-Project1.png?react";

const EmsProject = () => {
  return (
    <ProjectCard
      title="EMS Projects"
      subtitle="(React + Vite + Tailwind CSS)"
      description="The Employee Management System is a modern web-based application
        built using React + Vite for managing employees and their tasks. It
        supports two roles: Admin and Employee."
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
      repoLink="https://github.com/AnandKum4r/Employee-Management-System"
      arrow={<Aerrow />}
      color="#459bd5"
      isLeft={false}
    />
  );
};

export default EmsProject;
