import React from "react";
import { PROJECTS } from "../constants/constant";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa"; // Import the icon

const Projects = () => {
  return (
    <div className=" border-b border-neutral-900 pb-4">
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
                {/* Conditionally render only the icon as a link */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:text-blue-600" // Styled to look like a clickable icon
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
              <p className=" mb-2 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className=" mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900 "
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;