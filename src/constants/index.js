import { KeepStencilOp } from "three";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  mongodb,
  git,
  docker,
  einfochips,
  adbiz,
  carrent,
  jobit,
  tripguide,
  threejs,
  sapHybris,
  jenkins,
  kafka,  
  marklogic, 
  spring, 
  sql,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Spring Framework",
    icon: spring,
  },
  {
    name: "SAP Hybris",
    icon: sapHybris,
  },
  {
    name: "Kafka",
    icon: kafka,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Marklogic",
    icon: marklogic,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "einfochips - An Arrow Company",
    icon: einfochips,
    iconBg: "#ffffff",
    date: "March 2020 - April 2021",
    points: [
      "Contributing to multiple projects as a frontend & backend developer with security expertise.",
      "Developed various algorithms for the analyzed data that reduce computation and increase overall efficiency by 22%.",
      "Implemented kafka integrate system to reduce load on data base",
      "Analyzed and developed systems flow, data usage, and work processes by investigating various problems.",
      "Developed & designed various APIs, batch Jobs, databases, and fixed security vulnerabilities for e-commerce applications.",
      "Planned, Tracked, and managed deliverables on short-term sprints and long-term software developments."
    ],
  },
  {
    title: "Trainee Engineer",
    company_name: "einfochips - An Arrow Company",
    icon: einfochips,
    iconBg: "#ffffff",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Learned about Java, Linux, Cloud - AWS, Azure, Critical Analysis, emotional intelligence, logical thinking, ethics, and management.",
    ],
  },
  {
    title: "Software Developer, Intern",
    company_name: "Adbiz Directory Services Pvt. Ltd",
    icon: adbiz,
    iconBg: "#ffffff",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Worked on a web application's development, enhancements, and operation as a talented full-stack developer within a dedicated, product-based team.",
      "Developed a full-stack web application using Laravel for advertising company-Adbiz Directory and learned the concepts of HTML, CSS, jQuery, MySQL, and PHP",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
