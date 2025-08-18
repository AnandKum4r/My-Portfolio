import EmsCRUD from "../projects/EmsCRUD";
import EmsProject from "../projects/EmsProject";
import QuizApp from "../projects/QuizApp";
import ExpenseTracker from "../projects/ExpenseTracker";
import BottomArrow from "../assets/icons/bottom-arrow.svg?react";

const LatestWorks = () => {
  return (
    <>
      <div className="flex justify-center relative  after:content-[''] after:absolute after:w-[2px] after:h-5 after:bg-[#444] after:left-1/2 after:-translate-x-1/2 after:top-[90px]">
        <a
          href="#project"
          className="bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-200 group mb-20"
        >
          Latest Works
          <BottomArrow className="absolute rotate-90 left-1/2 -translate-x-1/2 top-8 transition-all duration-300 group-hover:top-6" />
        </a>
      </div>

      <section
        id="project"
        className="max-w-screen-xl scroll-mt-23 mx-auto px-4 relative pb-8 sm:pb-10"
      >
        <h2 className="text-3xl sm:text-[40px] bg-[#111] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#1788ae] sm:border-b-2 border-[#1788ae]">
          Latest Works
        </h2>

        <EmsProject />
        <EmsCRUD />
        <QuizApp />
        <ExpenseTracker />

        <div className="w-[2px] hidden sm:block bg-[#1788ae] absolute top-0 bottom-0 left-1/2 -translate-x-1/2"></div>
      </section>
    </>
  );
};

export default LatestWorks;
