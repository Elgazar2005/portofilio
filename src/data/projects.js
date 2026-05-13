// src/data/projects.js

import portfolioImg from "../assets/images/portfolio.png";
import carRentalImg from "../assets/images/car-rental.png";
import rentigoImg from "../assets/images/rentigo.png";

export const projects = [
  {
    id: 1,
    title: "Portfolio Website",

    description:
      "A modern personal portfolio website built using React, Tailwind CSS, and Material Tailwind.",

    image: portfolioImg,

    technologies: [
      "React",
      "Tailwind CSS",
      "Material Tailwind",
      "Responsive Design",
    ],

    github: "https://github.com/Elgazar2005",
    demo: "",
  },

  {
    id: 2,
    title: "Car Rental System",

    description:
      "A car rental management system developed using C++ and Object-Oriented Programming concepts.",

    image: carRentalImg,

    technologies: [
      "C++",
      "OOP",
      "Classes",
      "File Handling",
    ],

    github: "https://github.com/Elgazar2005/Speedy_rent",
    demo: "",
  },

  {
    id: 3,
    title: "Car Rental Platform",

    description:
      "A car rental platform that allows users to rent cars from different rental companies.",

    image: rentigoImg,

    technologies: [
      "React",
      "Node.js",
      "Tailwind CSS",
      "MongoDB",
      "Express",
    ],

    github: "https://github.com/omarmoashraf/RentiGOO",
    demo: "https://renti-goo.vercel.app/",
  },
];