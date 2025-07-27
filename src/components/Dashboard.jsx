import LinkedInLogo from "../assets/icons/linkedin.svg?react";
import GitHubLogo from "../assets/icons/github.svg?react";
import InstaLogo from "../assets/icons/instagram.svg?react";
import EmailLogo from "../assets/icons/email.svg?react";
import YoutubeLogo from "../assets/icons/youtube.svg?react";
import ProfileLogo from "../assets/images/name-logo.svg?react";
import RightArrow from "../assets/icons/right-arrow.svg?react";

const Profile = () => {
  return (
    <>
      <div className="flex -mt-10 relative">
        <div className="w-full px-4 max-w-screen-xl mx-auto">
          <ProfileLogo className=" absolute top-0 left-1/2 -translate-y-1/5 -translate-x-[150px] w-[300px] sm:w-[350px] md:w-[450px] h-auto" />
          <div className="relative ml-4 md:ml-12">
            <h1 className="text-4xl md:text-[65px] font-['Spartan'] mr-12">
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

export default Profile;
