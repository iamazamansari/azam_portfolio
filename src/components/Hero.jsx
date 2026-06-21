import React from "react";
import profile from "../assets/azam.jpg";
import { motion } from "framer-motion";
import { SUMMARY } from "../constants/constant";
import resume from "../assets/Azam_Ansari_Frontend.pdf";
import { FiDownload, FiMail } from "react-icons/fi";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  return (
    <div id="home" className="border-b border-neutral-300 pb-4 dark:border-neutral-900 lg:mb-35">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.span
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="mt-10 inline-flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-1.5 text-sm text-neutral-600 dark:border-neutral-700 dark:text-neutral-300 lg:mt-16"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
              </span>
              Open to opportunities
            </motion.span>
            <motion.h1
              variants={container(0.2)}
              initial="hidden"
              animate="visible"
              className="pb-4 pt-8 text-6xl font-thin tracking-tight lg:text-8xl"
            >
              Mohd Azam
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className=" bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Frontend Engineer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {SUMMARY}
            </motion.p>
            <motion.div
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="mb-4 flex flex-wrap gap-4"
            >
              <a
                href={resume}
                download
                className="inline-flex items-center gap-2 rounded-full bg-purple-700 px-5 py-2.5 font-bold text-white shadow-lg transition hover:bg-purple-900 hover:shadow-purple-700/40"
              >
                <FiDownload /> Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-400 px-5 py-2.5 font-bold text-neutral-700 transition hover:border-purple-600 hover:text-purple-600 dark:border-neutral-600 dark:text-neutral-200 dark:hover:border-purple-400 dark:hover:text-purple-400"
              >
                <FiMail /> Let's Connect
              </a>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="group relative"
            >
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-pink-400 via-purple-500 to-cyan-400 opacity-60 blur-lg transition duration-500 group-hover:opacity-90"></div>
              <img
                src={profile}
                alt="Mohd Azam Ansari"
                className="relative w-72 rounded-3xl border border-white/10 object-cover shadow-2xl transition duration-500 group-hover:scale-[1.02] sm:w-80 lg:w-96"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
