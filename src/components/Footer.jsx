import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const SOCIALS = [
  { Icon: FaLinkedin, href: "https://www.linkedin.com/in/azam-ansari95/" },
  { Icon: FaGithub, href: "https://github.com/iamazamansari" },
  { Icon: FaSquareXTwitter, href: "https://x.com/AzamAnsari95" },
  { Icon: FaInstagram, href: "https://www.instagram.com/azamroxx9058/?next=%2F" },
  { Icon: FaWhatsapp, href: "https://wa.me/917906079480" },
];

const Footer = () => {
  return (
    <footer className="py-10 text-center">
      <div className="mb-6 flex items-center justify-center gap-5 text-2xl">
        {SOCIALS.map(({ Icon, href }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 transition hover:-translate-y-1 hover:text-purple-600 dark:text-neutral-300 dark:hover:text-purple-400"
          >
            <Icon />
          </a>
        ))}
      </div>
      <p className="text-sm text-neutral-500">
        © {new Date().getFullYear()} Mohd Azam Ansari · Built with React &
        Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;
