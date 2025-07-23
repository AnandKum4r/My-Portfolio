import Aerrow from "../assets/images/aerrow.svg?react";
import projectImage from "../assets/images/EMS-Project2.png?react";

const EmsCRUD = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
        <div className="order-2 sm:order-1 w-full">
          <h3 className="text-[#ffe578] font-bold text-2xl md:text-4xl">
            EMS Project
          </h3>
          <span className="text-[#ffe578] text-base md:text-lg">
            (React + Vite + Tailwind CSS)
          </span>
          <p className="text-justify text-sm md:text-base mt-2">
            The Employee Management System is a web application built using
            React + Vite and Tailwind CSS for efficient management of employee
            data. This system provides a user-friendly interface for adding,
            updating, and deleting employee information.
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
              #SweetAlert2
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #TailwindCSS
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #vite
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #css
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #html
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #javascript
            </li>
            <li className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
              #figma
            </li>
          </ul>
        </div>
        <div className="h-[1px] left-1/2 right-1/4 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
        <div className="w-4 h-4 rounded-full border-[3px] border-[#ffe578] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
        <a
          href="https://github.com/AnandKum4r/EMS-Project"
          className="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
        >
          <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto">
            <img
              className="max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
              src={projectImage}
              alt=""
            />
            <span className="flex group-hover:-top-14 ease-jump duration-200 text-black bg-[#ffe578] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
              EMS Project
              <Aerrow />
            </span>
          </div>
        </a>
      </div>
    </>
  );
};

export default EmsCRUD;
