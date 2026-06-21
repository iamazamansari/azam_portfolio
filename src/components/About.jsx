import React from "react";
import about from "../assets/azam-laptop.jpg";
import { motion } from "framer-motion";
import { ABOUT } from "../constants/constant";

const About = () => {
  return (
    <div id="about" className=" border-b border-neutral-300 pb-4 dark:border-neutral-900">
      <h1 className="my-20 text-center text-4xl">
        About <span className=" text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className=" w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <div className="group relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-400 opacity-40 blur-lg transition duration-500 group-hover:opacity-70"></div>
              <img
                src={about}
                alt="Azam at work"
                className="relative max-w-full rounded-3xl object-cover shadow-2xl transition duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className=" w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className=" my-2 max-w-xl whitespace-pre-line py-6 text-neutral-700 dark:text-neutral-300">
              {ABOUT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
