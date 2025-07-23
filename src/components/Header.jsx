import HeaderLogo from "../assets/images/name-logo-white.svg?react";
import SunLogo from "../assets/icons/sun.svg?react";
import MoonLogo from "../assets/icons/moon.svg?react";
import PhoneLogo from "../assets/icons/phone.svg?react";
import TelegramLogo from "../assets/icons/telegram.svg?react";
import BottomArrow from "../assets/icons/bottom-arrow.svg?react";
import Dashbaord from "./Dashboard";
import Footer from "./Footer";
import EmsCRUD from "../projects/EmsCRUD";
import EmsProject from "../projects/EmsProject";
import QuizApp from "../projects/QuizApp";
import ExpenseTracker from "../projects/ExpenseTracker";

const Header = () => {
  return (
    <>
      <section className="flex flex-col justify-between h-screen">
        <header className="flex items-center justify-between w-full px-4 mt-4 max-w-screen-xl mx-auto">
          <HeaderLogo />
          <div className="flex gap-4">
            <SunLogo />
            <MoonLogo />
            <PhoneLogo />
            <a href="https://t.me/AnandKum4r" target="_blank">
              <TelegramLogo />
            </a>
          </div>
        </header>
        <Dashbaord />
        <div className="relative self-center after:content-[''] after:absolute after:w-[2px] after:h-5 after:bg-[#444] after:left-1/2 after:-translate-x-1/2 after:top-[90px]">
          <button className="bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group mb-20">
            Latest Works
            <BottomArrow className="absolute rotate-90 left-1/2 -translate-x-1/2 top-8 group:hover:-top-9" />
          </button>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-4 relative pb-8 sm:pb-16">
        <h2 className="text-3xl sm:text-[40px] bg-[#111] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#1788ae] sm:border-b-2 border-[#1788ae]">
          Latest Works
        </h2>
        <EmsProject />
        <EmsCRUD />
        <QuizApp/>
        <ExpenseTracker/>
        <div className="w-[2px] hidden sm:block bg-[#1788ae] absolute top-0 bottom-0 left-1/2 -translate-x-1/2"></div>
      </section>
      <Footer />
    </>
  );
};

export default Header;
