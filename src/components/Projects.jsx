import React from "react";
import { PROJECTS } from "../constants/constant";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div id="projects" className=" border-b border-neutral-300 pb-4 dark:border-neutral-900">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className=" my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className=" mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className=" w-full lg:w-1/4"
            >
              <img
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
                className=" mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className=" w-full max-w-xl lg:w-3/4"
            >
              {/* Always display the title as h6 */}
              <div className="mb-2 flex items-center gap-2"> {/* Added a div for flexible layout */}
                <h6 className="font-semibold">{project.title}</h6>
                {project.year && (
                  <span className="text-sm text-neutral-500">
                    {project.year}
                  </span>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live demo"
                    aria-label={`${project.title} live demo`}
                    className="text-sm text-neutral-500 transition hover:text-purple-500"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Source code"
                    aria-label={`${project.title} source code`}
                    className="text-base text-neutral-500 transition hover:text-purple-500"
                  >
                    <FaGithub />
                  </a>
                )}
              </div>
              <p className=" mb-2 whitespace-pre-line text-neutral-600 dark:text-neutral-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className=" rounded bg-neutral-200 px-2 py-1 text-sm font-medium text-purple-700 dark:bg-neutral-900 dark:text-purple-300 "
                >
                  {tech}
                </span>
              ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;