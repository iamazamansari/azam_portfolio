import { FaBootstrap, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiRedux, SiReactquery, SiExpress } from "react-icons/si";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaHtml5, FaCss3Alt, FaGitAlt, FaFigma } from "react-icons/fa";

const iconVariants = (duration, amplitude) => ({
  initial: { y: 0 },
  animate: {
    y: [-amplitude, amplitude],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const TECHNOLOGIES = [
  { Icon: RiReactjsLine, className: "text-7xl text-cyan-400", duration: 2.5, amplitude: 5 },
  { Icon: RiNextjsFill, className: "text-7xl text-black dark:text-white", duration: 3.5, amplitude: 7 },
  { Icon: BiLogoTypescript, className: "text-7xl text-blue-500", duration: 4, amplitude: 9 },
  { Icon: IoLogoJavascript, className: "text-7xl text-yellow-400", duration: 6, amplitude: 11 },
  { Icon: RiTailwindCssFill, className: "text-7xl text-cyan-400", duration: 7, amplitude: 13 },
  { Icon: SiRedux, className: "text-7xl text-purple-500", duration: 5, amplitude: 15 },
  { Icon: SiReactquery, className: "text-7xl text-red-500", duration: 4.5, amplitude: 17 },
  { Icon: FaNodeJs, className: "text-7xl text-green-500", duration: 5, amplitude: 19 },
  { Icon: SiExpress, className: "text-7xl text-black dark:text-white", duration: 5.5, amplitude: 21 },
  { Icon: SiMongodb, className: "text-7xl text-green-500", duration: 4, amplitude: 23 },
  { Icon: SiMysql, className: "text-7xl text-blue-400", duration: 4.5, amplitude: 13 },
  { Icon: BiLogoPostgresql, className: "text-7xl text-sky-700", duration: 5, amplitude: 9 },
  { Icon: FaBootstrap, className: "text-7xl text-violet-500", duration: 6, amplitude: 7 },
  { Icon: FaHtml5, className: "text-7xl text-orange-500", duration: 3.5, amplitude: 11 },
  { Icon: FaCss3Alt, className: "text-7xl text-blue-500", duration: 4, amplitude: 15 },
  { Icon: FaGitAlt, className: "text-7xl text-orange-600", duration: 5, amplitude: 17 },
  { Icon: FaFigma, className: "text-7xl text-pink-500", duration: 6, amplitude: 21 },
  { Icon: FaGithub, className: "text-7xl text-black dark:text-white", duration: 6, amplitude: 25 },
];

const Technologies = () => {
  return (
    <div id="technologies" className=" border-b border-neutral-300 pb-24 dark:border-neutral-800">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className=" my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {TECHNOLOGIES.map(({ Icon, className, duration, amplitude }, index) => (
          <motion.div
            key={index}
            variants={iconVariants(duration, amplitude)}
            initial="initial"
            animate="animate"
            className=" rounded-2xl border-4 border-neutral-300 p-4 dark:border-neutral-800"
          >
            <Icon className={className} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
