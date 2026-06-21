import project1 from "../assets/project-1.jpg";
import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project-3 (1).jpg";
import kanban from "../assets/kanban.avif";

export const SUMMARY = `Frontend Engineer with 3+ years building high-performance, production-grade web applications in React.js and Next.js.
Proven record of cutting LCP by ~42%, lifting Lighthouse scores from 68 to 94, and slashing redundant API calls by ~60% across
B2B SaaS and procurement platforms. Specializes in scalable architecture, reusable component systems, real-time features, and
AI-assisted workflows — shipping accessible, PWA-capable products at enterprise scale.`;

export const ABOUT = `I'm a Frontend Engineer with 3+ years of experience turning complex requirements into intuitive, high-performing web applications. My core strengths lie in React.js and Next.js (App Router, SSR/SSG), where I architect scalable component systems, real-time features, and AI-assisted workflows for B2B SaaS and procurement platforms.

I work fluently across JavaScript (ES6+), TypeScript, and modern tooling — TanStack React Query, Zustand, Redux Toolkit, React Hook Form, and Zod for state and data, and Tailwind CSS, Radix UI, MUI, and Bootstrap for UI. I'm obsessed with performance (lazy loading, memoization, code-splitting, virtualization) and accessibility, and I love shipping clean, maintainable, PWA-capable products at enterprise scale.`;

export const EXPERIENCES = [
  {
    year: "Jan 2026 - Present",
    role: "Frontend Developer",
    company: "Web Spiders Pvt Ltd, Kolkata",
    description: `• Architected Trafasa (B2B marketplace) in Next.js 16 / React 18 / TypeScript with App Router and SSR; built a 7-step onboarding wizard (React Hook Form + Zod + Zustand) — cut LCP by ~42%, raised Lighthouse from 68 to 94, and reduced form drop-off by ~35%.
• Optimized the API layer with TanStack React Query (stale-while-revalidate, prefetching) and 300ms debounced infinite scroll, slashing redundant network calls by ~60% and category-page TTFB to under 200ms.
• Designed a drag-and-drop storefront builder (@dnd-kit, virtualized rendering, React.memo/useCallback) enabling 50+ block reordering at 60fps; built a 40+ component library (Radix UI + Tailwind + CVA) driving ~70% UI reuse.
• Shipped real-time buyer–seller messaging via Socket.io-client (optimistic updates, DOMPurify XSS guard, Auth0 role-based guards) at under 100ms latency.
• Built the end-to-end Proquro RFQ module (Next.js 14) with multi-vendor quote comparison and quote-to-PO conversion — cut buyer evaluation time by ~45%; optimized Item Master over 50K+ SKUs, reducing API calls by ~70% and search latency from ~1.2s to under 250ms.`,
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "TanStack Query",
      "Zustand",
      "Radix UI",
      "Socket.io",
      "Auth0",
      "Tailwind CSS",
    ],
  },
  {
    year: "Jul 2024 - Jan 2025",
    role: "Consultant – Frontend",
    company: "NTT Data Business Solutions, Pune",
    description: `• Engineered SPAs using React.js, Node.js, MySQL, and Tailwind CSS, achieving a 98.6% client satisfaction score.
• Built RESTful services in Node.js + MySQL, enhancing data query efficiency by 25%.
• Optimized UI responsiveness and ARIA accessibility, driving a 10% rise in daily active users.`,
    technologies: ["React.js", "Node.js", "MySQL", "Tailwind CSS", "Redux"],
  },
  {
    year: "Jan 2022 - Apr 2024",
    role: "Frontend Developer",
    company: "Dual Lush Designs, Noida",
    description: `• Delivered responsive web and mobile apps in React.js, Next.js, React Native, and Tailwind CSS; implemented SEO-friendly SSR/SSG patterns, improving maintainability by 20%.
• Built backend logic in Node.js + Express.js + MySQL, ensuring secure and efficient API delivery across multiple client projects.`,
    technologies: [
      "React.js",
      "Next.js",
      "React Native",
      "Node.js",
      "Express.js",
      "MySQL",
      "Tailwind CSS",
    ],
  },
];

// For each project add a live URL to `link` and/or a repo URL to `github`.
// Leave a field as "" and its icon simply won't show.
export const PROJECTS = [
  {
    title: "Trafasa",
    image: kanban,
    year: "2026",
    link: "",
    github: "",
    description: `• B2B marketplace with seller, buyer, and storefront experiences; drag-and-drop builder for 50+ block reordering at 60fps; LCP improved 42%, Lighthouse 68 to 94.
• Real-time chat with <100ms latency, 7-step Zod-validated wizard, dark-mode PWA-capable responsive UI.`,
    technologies: [
      "Next.js 16",
      "React 18",
      "TypeScript",
      "TanStack Query",
      "Zustand",
      "Radix UI",
      "Socket.io",
      "Auth0",
      "@dnd-kit",
    ],
  },
  {
    title: "Proquro",
    image: project1,
    year: "2025-26",
    link: "",
    github: "",
    description: `• End-to-end procurement platform (RFQ, Indent, Item Master, PR) — buyer evaluation time down 45%, API calls down 70%, search latency 1.2s to under 250ms over 50K+ SKUs.
• Shared state layer, optimistic updates, role-based gating; Lighthouse 68 to 94, bundle reduced 35% via dynamic imports.`,
    technologies: [
      "Next.js 16",
      "TypeScript",
      "React Query",
      "Tailwind CSS",
      "React Hook Form",
      "Zod",
      "AbortController",
    ],
  },
  {
    title: "Pure It Water",
    image: project2,
    year: "2023-24",
    link: "",
    github: "",
    description: `• Built and maintained SPA and mobile features with React Native + Next.js + Tailwind CSS, reducing load time by 30% and improving mobile user engagement.
• Engineered RESTful endpoints with Express.js + MySQL, accelerating data access by 25%; implemented advanced caching, cutting API response delays by 15%.`,
    technologies: [
      "React.js",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "Express.js",
      "MySQL",
    ],
  },
  {
    title: "Wolseley UK",
    image: project3,
    year: "2022-23",
    link: "",
    github: "",
    description: `• Constructed e-commerce modules with React.js + Next.js + MySQL backend, boosting user engagement by 18%.
• Authored scalable APIs for order processing, payments, and customer management using Node.js + Express.js.`,
    technologies: ["React.js", "Next.js", "MySQL", "Node.js", "Express.js"],
  },
  {
    title: "ICBC Standard Bank",
    image: project1,
    year: "2024-25",
    link: "",
    github: "",
    description: `• Automated invoice generation pipeline using React.js, jQuery, XSLT, XSLFO, and Java, reducing manual processing effort by 30%.
• Improved accessibility (ARIA standards) and system responsiveness, driving a 10% increase in daily active users.`,
    technologies: ["React.js", "jQuery", "HTML5", "CSS3", "Java", "XSLT", "XSLFO"],
  },
];
