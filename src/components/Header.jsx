import React from "react";
import logo from "../assets/my-Azam.png";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaArrowDownAZ, FaSquareXTwitter } from "react-icons/fa6";
import { FiMoon, FiSun } from "react-icons/fi";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#technologies" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Header = ({ theme, toggleTheme }) => {
  return (
    <nav className="sticky top-0 z-50 mb-20 flex items-center justify-between py-6 backdrop-blur-sm">
      <div className="flex flex-shrink-0 items-center">
        <FaArrowDownAZ size={44} />
        <img className="mx-2 w-24" src={logo} alt="logo" />
      </div>

      <div className="hidden items-center gap-8 lg:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-neutral-600 transition hover:text-purple-600 dark:text-neutral-300 dark:hover:text-purple-400"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex items-center justify-center gap-3 text-2xl">
        <a
          className="hidden hover:translate-y-[-8px] transition duration-300 ease-in-out sm:block"
          href="https://www.linkedin.com/in/azam-ansari95/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          className="hidden hover:translate-y-[-8px] transition duration-300 ease-in-out sm:block"
          href="https://github.com/iamazamansari"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className="hidden hover:translate-y-[-8px] transition duration-300 ease-in-out sm:block"
          href="https://x.com/AzamAnsari95"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter />
        </a>
        <a
          className="hidden hover:translate-y-[-8px] transition duration-300 ease-in-out sm:block"
          href="https://www.instagram.com/azamroxx9058/?next=%2F "
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          className="hover:translate-y-[-8px] transition duration-300 ease-in-out"
          href="https://wa.me/917906079480"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
        <button
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          className="ml-2 flex items-center justify-center rounded-full border border-neutral-300 p-2 text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-200 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
        >
          {theme === "dark" ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Header;
