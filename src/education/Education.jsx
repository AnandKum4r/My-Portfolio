import EducationCard from "../components/EducationCard";
import BottomArrow from "../assets/icons/bottom-arrow.svg?react";

const Education = () => {
  const data = [
    {
      title: "B.Tech in Information Technology",
      subtitle:
        "Madan Mohan Malaviya University of Technology, Gorakhpur (MMMUT)",
      description:
        "Studied core subjects in Information Technology including Web Development, Data Structures, and DBMS. Participated in academic and project-based learning.",
      timeline: "2021 - 2024",
    },
    {
      title: "Diploma in Computer Science and Engineering",
      subtitle: "Maharana Pratap Polytechnic, Gorakhpur (BTEUP)",
      description:
        "Completed 3-year diploma focusing on C, C++, Computer Networks, and Operating Systems. Built foundational skills in software development.",
      timeline: "2018 - 2021",
    },
    {
      title: "Intermediate (Class 12th)",
      subtitle: "Pt J. L. N. Inter College, Bansgaon, Gorakhpur",
      description:
        "Completed 12th with core subjects including Physics, Chemistry, and Mathematics under UP Board.",
      timeline: "2017",
    },
    {
      title: "High School (Class 10th)",
      subtitle: "Pt J. L. N. Inter College, Bansgaon, Gorakhpur",
      description:
        "Completed 10th education under UP Board with a focus on basic science and mathematics.",
      timeline: "2015",
    },
  ];

  return (
    <>
      <div className="flex justify-center relative  after:content-[''] after:absolute after:w-[2px] after:h-5 after:bg-[#444] after:left-1/2 after:-translate-x-1/2 after:top-[90px]">
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
        className="max-w-screen-xl mb-6 mx-auto pb-0 md:pb-20 px-6 md:px-20 relative"
      >
        <h2 className="text-3xl sm:text-[40px] bg-[#111] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#1788ae] sm:border-b-2 border-[#1788ae]">
          Education
        </h2>
        <p className="text-center text-[#b0b2c3] mt-4 max-w-2xl mx-auto">
          A detailed overview of my academic journey.
        </p>

        <div className="mt-6 md:mt-0 xl:mt-0">
          {data.map((item, index) => (
            <EducationCard
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              timeline={item.timeline}
              index={index}
              isLast={data.length === index + 1}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Education;
