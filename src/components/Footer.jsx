import FooterLogo from "../assets/images/footer-logo.svg?react";
import LinkdedInLogo from "../assets/icons/linkedin.svg?react";
import GitHubLogo from "../assets/icons/github.svg?react";
import EmailLogo from "../assets/icons/email.svg?react";
import InstaLogo from "../assets/icons/instagram.svg?react";
import YoutubeLogo from "../assets/icons/youtube.svg?react";

const Footer = () => {

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0f172a] text-white px-6 pt-6 pb-5">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Left: Logo */}
        <div className="w-20">
          <FooterLogo className="w-full h-auto" />
        </div>

        {/* Center: Social Media + Copyright */}
        <div className="text-center">
          <ul className="flex flex-wrap items-center justify-center gap-5 mb-3">
            <li>
              <a
                href="https://www.linkedin.com/in/anandkum4r/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkdedInLogo className="w-6 h-6 hover:text-white hover:scale-110 transition-transform duration-300" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/AnandKum4r"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubLogo className="w-6 h-6 hover:text-white hover:scale-110 transition-transform duration-300" />
              </a>
            </li>
            <li>
              <a
                href="mailto:anandkr.dev21@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <EmailLogo className="w-6 h-6 hover:text-white hover:scale-110 transition-transform duration-300" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/anandkum4r_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstaLogo className="w-6 h-6 hover:text-white hover:scale-110 transition-transform duration-300" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@GeekyAnand"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YoutubeLogo className="w-6 h-6 hover:text-white hover:scale-110 transition-transform duration-300" />
              </a>
            </li>
          </ul>
          <p className="text-sm tracking-wide">
            © {new Date().getFullYear()}
            <span className="text-[#459bd5] font-medium"> Anand Kumar</span>.
            All rights reserved.
          </p>
        </div>

        {/* Right: Scroll to Top */}
        <div>
          <button
            onClick={scrollToTop}
            className="bg-gradient-to-r from-[#1595b6] to-[#1f2667e6] text-sm font-semibold px-6 py-2 rounded-full hover:scale-105 transition duration-200"
          >
            Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
