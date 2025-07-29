import HeaderLogo from "../assets/images/name-logo-white.svg?react";
import SunLogo from "../assets/icons/sun.svg?react";
import MoonLogo from "../assets/icons/moon.svg?react";
import PhoneLogo from "../assets/icons/phone.svg?react";
import TelegramLogo from "../assets/icons/telegram.svg?react";

const TopHeader = () => {
  return (
    <>
      <header className="z-10 flex items-center justify-between w-full px-4 mt-4  max-w-screen-xl mx-auto">
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
    </>
  );
};

export default TopHeader;
