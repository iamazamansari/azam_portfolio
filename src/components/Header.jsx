import React from "react";
import logo from "../assets/my-Azam.png";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaArrowDownAZ, FaSquareXTwitter } from "react-icons/fa6";

const Header = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <FaArrowDownAZ size={44} />
        <img className="mx-2 w-24" src={logo} alt="logo" />
      </div>
      <div className="flex m-8 items-center justify-center gap-3 text-2xl">
        <a
          className=" hover:translate-y-[-8px] transition duration-300 ease-in-out"
          href="https://www.linkedin.com/in/mohd-azam-ansari-578b4816b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          className=" hover:translate-y-[-8px] transition duration-300 ease-in-out"
          href="https://github.com/iamazamansari"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className=" hover:translate-y-[-8px] transition duration-300 ease-in-out"
          href="https://x.com/AzamAnsari95"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter />
        </a>
        <a
          className=" hover:translate-y-[-8px] transition duration-300 ease-in-out"
          href="https://www.instagram.com/azamroxx9058/?next=%2F "
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          className=" hover:translate-y-[-8px] transition duration-300 ease-in-out"
          href="https://wa.me/917906079480"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
      </div>
    </nav>
  );
};

export default Header;
