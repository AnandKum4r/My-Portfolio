import { useState } from "react";
import HeaderLogo from "../assets/images/name-logo-white.svg?react";
import SunLogo from "../assets/icons/sun.svg?react";
import MoonLogo from "../assets/icons/moon.svg?react";
import { Menu, X } from "lucide-react"; // using lucide icons for menu toggle
import SocialIcons from "../components/SocialIcons";

const TopHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "Project",
    "Skills",
    "Education",
    "About",
    "Contact",
  ];

  return (
    <header className="w-full z-50 mb-35 text-white shadow-md">
      <div className="flex items-center justify-between px-4 py-3 max-w-screen-xl mx-auto">
        {/* Logo */}
        <HeaderLogo />

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-semibold hover:text-blue-400 transition"
            >
              {item}
            </a>
          ))}
          {/* Icons */}
          <SunLogo className="cursor-pointer hover:scale-110 transition" />
          <MoonLogo className="cursor-pointer hover:scale-110 transition" />
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#111] px-4 pb-4">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg font-semibold hover:text-blue-400 transition"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <SunLogo className="cursor-pointer hover:scale-110 transition" />
              <MoonLogo className="cursor-pointer hover:scale-110 transition" />

              <SocialIcons className="flex gap-4 cursor-pointer hover:scale-110 transition [&>li]:w-6" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default TopHeader;
