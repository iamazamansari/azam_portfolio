import project1 from "../assets/project-1.jpg";
import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project-3 (1).jpg";
import kanban from "../assets/kanban.avif";

export const SUMMARY = `Frontend Developer with 3+ years of experience in building high-performance web & mobile applications using React.js, 
Next.js,React Native and Node.js. Skilled in optimizing performance, integrating REST APIs, and enhancing UI/UX. Passionate about 
scalable architecture, accessibility, and modern JavaScript frameworks.`;

export const ABOUT = `With 3+ years of dedicated experience as a Frontend Developer, I'm passionate about transforming ideas into intuitive and high-performing web and mobile experiences. My core strengths lie in React.js, Next.js, and React Native, where I build dynamic applications that truly shine.

I bring a strong command of JavaScript, TypeScript, HTML, and CSS, coupled with a deep understanding of modern frontend development. Whether it's crafting responsive layouts with Tailwind CSS, Material UI, ShadCN and Bootstrap or maintaining pristine styles with SCSS, I'm committed to clean, organized, and maintainable code. I thrive on collaboration and innovation, always eager to tackle new challenges and contribute to impactful projects.`;

export const EXPERIENCES = [
  {
    year: "July-2024 - Feb-2025",
    role: "HTML Developer",
    company: "NTT Data Buisness Solutions",
    description: `• Developed SPAs using React.js, MySQL, Tailwind CSS, Bootstrap, Java, XSLT, XSLFO, HTML, and CSS, improving 
responsiveness and achieving a 98.6% client satisfaction score.
• Integrated REST APIs with MySQL for optimized data handling, improving query performance by 25%.
• Enhanced UI accessibility, leading to a 10% increase in daily user engagement.`,
    technologies: ["React.js", "MySQL", "Java", "Bootstrap", "Redux"],
  },
  {
    year: "Jan-2022 - Feb-2024",
    role: "Frontend Developer",
    company: "Island Beach Vacation",
    description: `• Designed and developed a responsive web & mobile app using React.js, React Native, Tailwind CSS, and Bootstrap, 
achieving a 5.5/6 user rating.
• Developed scalable & SEO-friendly web applications using Next.js, leveraging SSR and SSG for optimal performance 
and maintainability by 20%.
• Developed a RESTful API using Node.js improving backend efficiency and secure CRUD operations.`,
    technologies: [
      "React.js",
      "Next.js",
      "NodeJS",
      "MongoDB",
      "React Native",
      "MySQL",
      "PostgreSQL",
      "Tailwind CSS",
      "Redux",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Kanban Board",
    image: kanban,
    description: `• Developed a responsive Kanban board web application for visualizing and managing tasks using React.js
• Implemented drag-and-drop functionality for seamless task movement between columns.
• Utilized local storage or a state management library (e.g., Redux) to persist task data.
• Designed a clean UI with custom styling (CSS/Tailwind) for an intuitive user experience.`,
    technologies: ["ReactJs", "Redux", "Tailwind CSS", "HTML5"],
    link: "https://kanban-board-assingment.vercel.app/",
  },

  {
    title: "ICBC Standard Bank",
    image: project1,
    description: `• Automated invoice generation using React.js, jQuery, HTML, CSS, XSLFO, Java, and XSLT, reducing manual efforts 
by 30%.• Improved accessibility and system responsiveness, leading to a 10% increase in daily active users.`,
    technologies: [
      "React.js",
      "MySQL",
      "Java",
      "Bootstrap",
      "HTML5",
      "Redux",
      "XHTML",
    ],
  },
  {
    title: "Pure It Water",
    image: project2,
    description: `• Automated invoice generation using React.js, jQuery, HTML, CSS, XSLFO, Java, and XSLT, reducing manual efforts 
    by 30%.
    • Improved accessibility and system responsiveness, leading to a 10% increase in daily active users.`,
    technologies: [
      "React.js",
      "Next.js",
      "MySQL",
      "React Native",
      "Bootstrap",
      "Redux",
    ],
  },
  {
    title: "Wolseley UK",
    image: project3,
    description: `• Developed an e-commerce platform using React.js, Next.js and MySQL, increasing user engagement by 18%.
• Designed custom APIs for orders, payments, and customer profiles, improving efficiency.
• Integrated message queues (MQ) to enhance order processing speed and reliability`,
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Redux",
    ],
  },
];
