import React from "react";

const skills = {
  frontend: [
    { name: "HTML", logo: "/icons/html.png" },
    { name: "CSS", logo: "/icons/css.png" },
    { name: "SASS", logo: "/icons/sass.png" },
    { name: "JavaScript", logo: "/icons/javascript.png" },
    { name: "React JS", logo: "/icons/reactjs.png" },
    { name: "Angular", logo: "/icons/angular.png" },
    { name: "Redux", logo: "/icons/redux.png" },
    { name: "Next JS", logo: "/icons/nextjs.png" },
    { name: "Tailwind CSS", logo: "/icons/tailwindcss.png" },
    { name: "GSAP", logo: "/icons/gsap.png" },
    { name: "Material UI", logo: "/icons/materialui.png" },
    { name: "Bootstrap", logo: "/icons/bootstrap.png" },
  ],
  backend: [
    { name: "MySQL", logo: "/icons/mysql.png" },
    { name: "MongoDB", logo: "/icons/mongodb.png" },
    { name: "Node JS", logo: "/icons/nodejs.png" },
    { name: "Express JS", logo: "/icons/expressjs.png" },
    { name: "Firebase", logo: "/icons/firebase.png" },
    { name: "GraphQL", logo: "/icons/graphql.png" },
  ],
  languages: [
    { name: "C", logo: "/icons/c.png" },
    { name: "C++", logo: "/icons/cpp.png" },
    { name: "Java", logo: "/icons/java.png" },
    { name: "Python", logo: "/icons/python.png" },
    { name: "C-Sharp", logo: "/icons/csharp.png" },
    { name: "JavaScript", logo: "/icons/javascript.png" },
    { name: "TypeScript", logo: "/icons/typescript.png" },
  ],
  tools: [
    { name: "Git", logo: "/icons/git.png" },
    { name: "GitHub", logo: "/icons/github.png" },
    { name: "Postman", logo: "/icons/postman.png" },
    { name: "Figma", logo: "/icons/figma.png" },
    { name: "VS Code", logo: "/icons/vscode.png" },
    { name: "Docker", logo: "/icons/docker.png" },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="bg-[#090b1a] text-white py-16 px-4">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center">
          <span className="text-white">SKILLS</span>
          <div className="h-1 w-20 bg-purple-600 mx-auto mt-2 rounded-full"></div>
        </h2>
        <p className="text-center text-[#b0b2c3] mt-4 max-w-2xl mx-auto">
          A collection of my technical skills and expertise honed through
          various projects and experiences.
        </p>

        {/* Skill Box Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Frontend */}
          <div className="border border-[#444] rounded-2xl p-6 bg-[#0f1123] shadow-lg">
            <h3 className="text-2xl font-semibold text-center mb-6 text-[#cccccc]">
              Frontend
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 place-items-center">
              {skills.frontend.map((skill, i) => (
                <div
                  key={i}
                  className="bg-[#181b32] hover:bg-[#1f2342] w-full px-2 py-2 rounded-xl flex flex-col items-center justify-center transition duration-200"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-8 h-8 mb-1"
                  />
                  <p className="text-sm text-center">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="border border-[#444] rounded-2xl p-6 bg-[#0f1123] shadow-lg">
            <h3 className="text-2xl font-semibold text-center mb-6 text-[#cccccc]">
              Backend
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 place-items-center">
              {skills.backend.map((skill, i) => (
                <div
                  key={i}
                  className="bg-[#181b32] hover:bg-[#1f2342] w-full px-2 py-2 rounded-xl flex flex-col items-center justify-center transition duration-200"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-8 h-8 mb-1"
                  />
                  <p className="text-sm text-center">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="border border-[#444] rounded-2xl p-6 bg-[#0f1123] shadow-lg">
            <h3 className="text-2xl font-semibold text-center mb-6 text-[#cccccc]">
              Languages
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 place-items-center">
              {skills.languages.map((skill, i) => (
                <div
                  key={i}
                  className="bg-[#181b32] hover:bg-[#1f2342] w-full px-2 py-2 rounded-xl flex flex-col items-center justify-center transition duration-200"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-8 h-8 mb-1"
                  />
                  <p className="text-sm text-center">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="border border-[#444] rounded-2xl p-6 bg-[#0f1123] shadow-lg">
            <h3 className="text-2xl font-semibold text-center mb-6 text-[#cccccc]">
              Tools
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 place-items-center">
              {skills.tools.map((skill, i) => (
                <div
                  key={i}
                  className="bg-[#181b32] hover:bg-[#1f2342] w-full px-2 py-2 rounded-xl flex flex-col items-center justify-center transition duration-200"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-8 h-8 mb-1"
                  />
                  <p className="text-sm text-center">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
