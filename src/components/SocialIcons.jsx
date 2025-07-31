import LinkedInLogo from "../assets/icons/linkedin.svg?react";
import GitHubLogo from "../assets/icons/github.svg?react";
import InstaLogo from "../assets/icons/instagram.svg?react";
import EmailLogo from "../assets/icons/email.svg?react";
import YoutubeLogo from "../assets/icons/youtube.svg?react";

const SocialIcons = ({ className = "flex gap-4"}) => {
  return (
    <ul className={className}>
      <li className="w-7 hover:text-white hover:scale-125 transition-transform duration-300">
        <a
          href="https://www.linkedin.com/in/anandkum4r/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInLogo />
        </a>
      </li>
      <li className="w-7 hover:text-white hover:scale-125 transition-transform duration-300">
        <a
          href="https://github.com/AnandKum4r"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubLogo />
        </a>
      </li>
      <li className="w-7 hover:text-white hover:scale-125 transition-transform duration-300">
        <a
          href="mailto:anandkr.dev21@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <EmailLogo />
        </a>
      </li>
      <li className="w-7 hover:text-white hover:scale-125 transition-transform duration-300">
        <a
          href="https://www.instagram.com/anandkum4r_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstaLogo />
        </a>
      </li>
      <li className="w-7 hover:text-white hover:scale-125 transition-transform duration-300">
        <a
          href="https://www.youtube.com/@GeekyAnand"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YoutubeLogo />
        </a>
      </li>
    </ul>
  );
};

export default SocialIcons;
