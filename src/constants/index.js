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
  crowdcomputing,
  crud,
  iot,
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
  }
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
    name: "Crowd Computing Using CNN",
    description:
      "A web app uses a VGG-16 CNN to count people in images, combining Deep Learning with image preprocessing. User-friendly interface and backend logic facilitate image processing and communication with the model.",
    tags: [
      {
        name: "CNN",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "ML",
        color: "pink-text-gradient",
      },
    ],
    image: crowdcomputing,
    source_code_link: "https://github.com/gopal031119/Crowd-Computing-Using-CNN",
  },
  {
    name: "Employee CRUD Using JWT",
    description:
      "JWT-based Employee CRUD project ensures secure operations on employee data. Utilizing JWT for authentication, it offers a robust solution with API endpoints for managing records.",
    tags: [
      {
        name: "spring",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: crud,
    source_code_link: "https://github.com/gopal031119/employee-crud-using-jwt",
  },
  {
    name: "Smart Dustbin -Dry and Wet Waste Separator",
    description:
      "Considering the current scenario, there was an issue related to dumpsters and cleanliness, So I created an IoT-based smart dustbin that automatically separates dry and wet waste.",
    tags: [
      {
        name: "iot",
        color: "blue-text-gradient",
      },
      {
        name: "aws",
        color: "green-text-gradient",
      },
    ],
    image: iot,
    source_code_link: "https://github.com/gopal031119/IOT-Based-Smart-Dustbin-Wet-Dry-separator",
  },
];

export { services, technologies, experiences, testimonials, projects };
