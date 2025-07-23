import Aerrow from "../assets/images/aerrow.svg?react";
import projectImage from "../assets/images/QuizApp.png?react";

const QuizApp = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[80px] items-center sm:mt-20 relative">
        <div className="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
        <div className="w-4 h-4 rounded-full border-[3px] border-[#459bd5] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
        <a
          href="https://github.com/AnandKum4r/Quiz-App"
          className="flex w-full relative justify-center sm:justify-start"
        >
          <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200">
            <img
              className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
              src={projectImage}
              alt="EMS Project"
            />

            <span className="flex group-hover:-top-14 ease-jump duration-200 bg-[#459bd5] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
              Quiz App
              <Aerrow />
            </span>
          </div>
        </a>

        <div className="w-full">
          <h3 className="text-[#459bd5] font-bold text-2xl md:text-4xl">
            Quiz App
          </h3>
          <span className="text-[#459bd5] text-base md:text-lg">
            (JavaScript Quiz Application)
          </span>
          <p className="text-justify text-sm md:text-base mt-2">
            The Quiz App is a simple and interactive web application built using
            HTML, CSS, and JavaScript. It allows users to answer multiple-choice
            questions and navigate through a series of quiz questions.
          </p>

          <ul className="flex flex-wrap gap-2 mt-2">
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #react.js
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #express.js
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #node.js
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #tailwindCSS
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #vite
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #html
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #css
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #javascript
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #figma
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default QuizApp;
