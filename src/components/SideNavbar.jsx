import LinkedInLogo from "../assets/icons/linkedin.svg?react";
import GitHubLogo from "../assets/icons/github.svg?react";
import InstaLogo from "../assets/icons/instagram.svg?react";
import EmailLogo from "../assets/icons/email.svg?react";
import YoutubeLogo from "../assets/icons/youtube.svg?react";
import Dashbaord from "./Dashboard";

const SideNavbar = () => {
  return (
    <>
      <div className="flex -mt-10 relative">
        <Dashbaord />
        <ul className="ml-auto space-y-6 text-[#b0b2c3] absolute right-8">
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

  
    </>
  );
};

export default SideNavbar;
