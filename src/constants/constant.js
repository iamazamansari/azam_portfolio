import project1 from "../assets/project-1.jpg";
import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project-3 (1).jpg";

export const SUMMARY = `Front-end developer with 3 years of experience in designing and building responsive web design in the financial industry. Proficient with CSS and JS Frameworks, with extensive knowledge of UX and User psychology. Notable achievements include boosting the conversion rate of an existing website by 80% with improved code and design.I have honed my skills in front-end technologies like React js, jQuery, Bootstrap, as well as back-end technologies like Node.js, MongoDB, etc.`;

export const ABOUT = `I am a highly motivated and detail-oriented frontend developer
              with 3 years of experience specializing in React.js, jQuery.My passion
              lies in creating seamless and dynamic web applications that
              provide an outstanding user experience. I bring a strong
              proficiency in JavaScript, HTML, and CSS, combined with a deep
              understanding of modern frontend frameworks and libraries.
              I thrive in environments that encourage collaboration and
              innovation. My experience with Bootstrap and Tailwind CSS has
              enabled me to design responsive and customizable web interfaces,
              while my proficiency in Sass/SCSS allows me to write clean,
              organized, and maintainable styles.`;

export const EXPERIENCES = [
  {
    year: "July-2024 - Present",
    role: "HTML Web Developer",
    company: "NTT Data Buisness Solutions",
    description: `Created interactive invoices with HTML, CSS, XHTML, XSLFO and XSLT resulting in improved user experience maintained 98.6% average client satisfaction score across all projects, well above industry average.Implemented code standards that improved team's average productivity by 25%`,
    technologies: ["Java", "Bootstrap", "XHTML", "W3C Validator"],
  },
  {
    year: "Jan-2022 - Feb-2024",
    role: "Frontend Developer",
    company: "Island Beach Vacation",
    description: `Designed and implemented user-friendly web applications using React.js and Redux for state management.
    Utilized Tailwind CSS and Bootstrap to create responsive and visually appealing designs,managed server-side logic using Node.js and Express.js,Integrated MongoDB as the database to efficiently handle large sets of data,Implemented unit testing and debugging processes.`,
    technologies: ["React.js", "Tailwind", "Redux", "NodeJS", "MongoDB"],
  },
];

export const PROJECTS = [
  {
    title: "ICBC Standard Bank",
    image: project1,
    description:
      "Developed customer facing invoices from scratch using HTML,CSS,XSL FO, XHTML, XSLT boosting user satisfaction score by 20%.Enhanced system accessibility and responsiveness, leading to 10% increase in daily user.Validating using W3C Validator, Apache-FO,etc.",
    technologies: ["Java", "Bootstrap", "HTML5", "CSS3", "XHTML"],
  },
  {
    title: "Pure It Water",
    image: project2,
    description:
      "Developing a high-performance single-page application using React, HTML, CSS, Bootstrap reducing load times by 30%. Implemented responsive and accessible design, ensuring compatibility across multiple devices and browsers, boosting user engagement by 25%.",
    technologies: ["React.js", "Bootstrap", "SASS", "Redux"],
  },
  {
    title: "Wolseley UK",
    image: project3,
    description:
      "Pioneered the use of modern web frameworks and libraries, increasing development efficiency and reducing time to market by 18%.Engineered a complex web system application software that increased customer conversion rates by 12%.",
    technologies: ["React.js", "Tailwind", "Redux", "Bootstrap"],
  },
];
