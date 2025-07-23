import React from "react";
import HeaderLogo from "../assets/images/name-logo-white.svg?react";
import SunLogo from "../assets/icons/sun.svg?react";
import MoonLogo from "../assets/icons/moon.svg?react";
import PhoneLogo from "../assets/icons/phone.svg?react";
import TelegramLogo from "../assets/icons/telegram.svg?react";
import SideNavbar from "./SideNavBar";
import BottomArrow from "../assets/icons/bottom-arrow.svg?react";

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
        <SideNavbar />
        <div class="relative self-center after:content-[''] after:absolute after:w-[2px] after:h-5 after:bg-[#444] after:left-1/2 after:-translate-x-1/2 after:top-[90px]">
          <button className="bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group mb-20">
            Latest Works
            <BottomArrow className="absolute rotate-90 left-1/2 -translate-x-1/2 top-8 group:hover:-top-9" />
          </button>
        </div>
      </section>
    </>
  );
};

export default Header;
