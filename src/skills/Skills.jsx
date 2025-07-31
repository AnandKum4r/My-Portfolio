import SkillGrid from "../components/SkillGrid"; // Adjust path as needed
import BottomArrow from "../assets/icons/bottom-arrow.svg?react";

const skills = {
  frontend: [
    { name: "HTML", logo: "/icons/html.png" },
    { name: "CSS", logo: "/icons/css.png" },
    { name: "JavaScript", logo: "/icons/javascript.png" },
    { name: "React JS", logo: "/icons/reactjs.png" },
    { name: "Redux", logo: "/icons/redux.png" },
    { name: "Next JS", logo: "/icons/nextjs.png" },
    { name: "Tailwind CSS", logo: "/icons/tailwindcss.png" },
    { name: "Bootstrap", logo: "/icons/bootstrap.png" },
  ],
  backend: [
    { name: "MySQL", logo: "/icons/mysql.png" },
    { name: "MongoDB", logo: "/icons/mongodb.png" },
    { name: "Node JS", logo: "/icons/nodejs.png" },
    { name: "Express JS", logo: "/icons/express.png" },
  ],
  languages: [
    { name: "C++", logo: "/icons/cpp.png" },
    { name: "Python", logo: "/icons/python.png" },
    { name: "JavaScript", logo: "/icons/javascript.png" },
  ],
  tools: [
    { name: "Git", logo: "/icons/git.png" },
    { name: "GitHub", logo: "/icons/github.png" },
    { name: "VS Code", logo: "/icons/vscode.png" },
    { name: "Vercel", logo: "/icons/vercel.png" },
  ],
};

const Skills = () => {
  return (
    <>
      <div className="flex justify-center relative self-center after:content-[''] after:absolute after:w-[2px] after:h-5 after:bg-[#444] after:left-1/2 after:-translate-x-1/2 after:top-[90px]">
        <a
          href="#skills"
          className="bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-200 group mb-20"
        >
          Skills
          <BottomArrow className="absolute rotate-90 left-1/2 -translate-x-1/2 top-8 transition-all duration-300 group-hover:top-6" />
        </a>
      </div>{" "}
      <section id="skills" className="bg-[#111] text-white pb-16 px-4 ">
        <div className="max-w-screen-xl mx-auto ">
          <h2 className="text-3xl sm:text-[40px] bg-[#111] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#1788ae] sm:border-b-2 border-[#1788ae]">
            Skills
          </h2>
          <p className="text-center text-[#b0b2c3] mt-4 max-w-2xl mx-auto">
            A collection of my technical skills and expertise honed through
            various projects and experiences.
          </p>

          {/* Grid Layout */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            <SkillGrid title="Frontend" skills={skills.frontend} />
            <SkillGrid title="Backend" skills={skills.backend} />
            <SkillGrid title="Languages" skills={skills.languages} />
            <SkillGrid title="Tools" skills={skills.tools} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
