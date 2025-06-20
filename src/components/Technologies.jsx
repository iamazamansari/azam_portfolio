import { FaBootstrap, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

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

const Technologies = () => {
  return (
    <div className=" border-b border-neutral-800 pb-24">
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
        <motion.div
          variants={iconVariants(2.5, 5)}
          initial="initial"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className=" text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5, 7)}
          initial="initial"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiNextjsFill className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(4.5, 9)}
          initial="initial"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMysql className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4.5, 11)}
          initial="initial"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(4, 13)}
          initial="initial"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className=" text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(5, 15)}
          initial="initial"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className=" text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(5.5, 17)}
          initial="initial"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaBootstrap className=" text-7xl text-violet-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(6, 19)}
          initial="initial"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssFill className=" text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(7, 21)}
          initial="initial"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-800 p-4"
        >
          <IoLogoJavascript className=" text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(8, 23)}
          initial="initial"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoTypescript className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(6, 25)}
          initial="initial"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaGithub className=" text-7xl" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
