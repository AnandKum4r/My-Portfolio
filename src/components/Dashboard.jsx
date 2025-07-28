import LinkedInLogo from "../assets/icons/linkedin.svg?react";
import GitHubLogo from "../assets/icons/github.svg?react";
import InstaLogo from "../assets/icons/instagram.svg?react";
import EmailLogo from "../assets/icons/email.svg?react";
import YoutubeLogo from "../assets/icons/youtube.svg?react";
import NameLogo from "../assets/images/name-logo.svg?react";
import RightArrow from "../assets/icons/right-arrow.svg?react";

const Dashbaord = () => {
  return (
    <>
      <section className="flex flex-col justify-between py-25">
        <div className="flex -mt-10 relative ">
          <div className="w-full px-4 max-w-screen-xl mx-auto">
            <NameLogo className="absolute top-0 left-1/2 -translate-y-1/5 -translate-x-[150px] w-[300px] sm:w-[400px] md:w-[450px] h-auto" />
            <div className="relative ml-4 md:ml-12">
              <h1 className="text-[55px] sm:text-[65px] md:text-[75px] font-['Merriweather'] mr-15">
                Anand Kumar
              </h1>
              <p className="font-['Merriweather'] italic my-4 md:my-5">
                MERN Stack Developer
              </p>
              <button className="bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group">
                About Me
                <RightArrow className="absolute top-1/2 -translate-y-1/2 -right-7 group:hover:-right-8" />
              </button>
            </div>
          </div>
          <ul className="ml-auto space-y-6 text-[#b0b2c3] absolute right-5">
            <li className="w-7 hover:text-white transition-colors duration-300">
              <a
                href="https://www.linkedin.com/in/anandkum4r/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInLogo />
              </a>
            </li>
            <li className="w-7 hover:text-white transition-colors duration-300">
              <a
                href="https://github.com/AnandKum4r"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubLogo />
              </a>
            </li>
            <li className="w-7 hover:text-white transition-colors duration-300">
              <a
                href="mailto:anandkr.dev21@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <EmailLogo />
              </a>
            </li>
            <li className="w-7 hover:text-white transition-colors duration-300">
              <a
                href="https://www.instagram.com/anandkum4r_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstaLogo />
              </a>
            </li>
            <li className="w-7 hover:text-white transition-colors duration-300">
              <a
                href="https://www.youtube.com/@GeekyAnand"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YoutubeLogo />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Dashbaord;
