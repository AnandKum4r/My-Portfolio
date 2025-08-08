// src/sections/Education.jsx

import EducationCard from "../components/EducationCard";
import BottomArrow from "../assets/icons/bottom-arrow.svg?react";

// 🎓 Logo imports
import MMMUTLogo from "../assets/logos/MMMUT-Logo.png";
import BTEUPLogo from "../assets/logos/BTEUP-Logo.jpg";
import UPBoardLogo from "../assets/logos/UPBoard-Logo.png";

const Education = () => {
  return (
    <>
      <div className="flex justify-center relative after:content-[''] after:absolute after:w-[2px] after:h-5 after:bg-[#444] after:left-1/2 after:-translate-x-1/2 after:top-[90px]">
        <a
          href="#education"
          className="bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-200 group mb-20"
        >
          Education
          <BottomArrow className="absolute rotate-90 left-1/2 -translate-x-1/2 top-8 transition-all duration-300 group-hover:top-6" />
        </a>
      </div>
      <section
        id="education"
        className="max-w-screen-xl mx-auto px-4 xl:px-15 relative pb-8 sm:pb-16"
      >
        <h2 className="text-3xl sm:text-[40px] bg-[#111] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#1788ae] sm:border-b-2 border-[#1788ae]">
          Education
        </h2>

        {/* Timeline background lines — add z-0 so cards appear above */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Left center line */}
          <div className="w-[2px] h-auto top-[150px] bottom-[80px] bg-[#2e3c53] absolute left-1/2 -translate-x-[100px] hidden sm:block"></div>

          {/* Right center line */}
          <div className="w-[2px] h-auto top-[150px] bottom-[80px] bg-[#2e3c53] absolute left-1/2 translate-x-[100px] hidden sm:block"></div>
        </div>

        {/* Education Cards - keep these above the lines */}
        <div className="relative z-10">
          <EducationCard
            logo={MMMUTLogo}
            degree="B.Tech in Information Technology"
            institution="Madan Mohan Malaviya University of Technology, Gorakhpur"
            timeline="2021 - 2024"
            grade="CGPA: 7.28 / 10"
            description="Studied core subjects like Data Structures, Web Technologies, DBMS, Operating Systems, and Software Engineering. Participated in multiple tech projects and development activities."
            color="#87d068"
            isLeft={false}
          />

          <EducationCard
            logo={BTEUPLogo}
            degree="Diploma in Computer Science and Engineering"
            institution="Maharana Pratap Polytechnic, Gorakhpur (BTEUP)"
            timeline="2018 - 2021"
            grade="Percentage: 80.83%"
            description="Focused on core engineering principles including C, Data Structures, and basic web development. Completed industrial training and final year project."
            color="#ff9f68"
            isLeft={true}
          />

          <EducationCard
            logo={UPBoardLogo}
            degree="Intermediate (12th Grade)"
            institution="Pt J L N Inter College, Bansgaon, Gorakhpur"
            timeline="2017"
            grade="First Division"
            description="Completed 12th with Physics, Chemistry, and Mathematics. Built a strong foundation in analytical and logical reasoning."
            color="#459bd5"
            isLeft={false}
          />

          <EducationCard
            logo={UPBoardLogo}
            degree="High School (10th Grade)"
            institution="Pt J L N Inter College, Bansgaon, Gorakhpur"
            timeline="2015"
            grade="Percentage: 80.82%"
            description="Completed high school education with core subjects and distinction in Mathematics and Science."
            color="#d14583"
            isLeft={true}
          />
        </div>
      </section>
    </>
  );
};

export default Education;
