import FooterLogo from "../assets/images/footer-logo.svg?react";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0f172a] text-white px-6 py-6">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Left: Logo */}
        <div className="w-20">
          <FooterLogo className="w-full h-auto" />
        </div>

        {/* Center: Social Media + Copyright */}
        <div className="text-center">
          <SocialIcons className="flex flex-wrap items-center justify-center gap-5 mb-3 [&>li]:w-6" />

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
            className="fixed bottom-10 right-6 z-50 bg-gradient-to-r from-[#1595b6] to-[#1f2667e6] text-sm font-semibold px-6 py-2 rounded-full hover:scale-105 transition duration-200"
          >
            Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
