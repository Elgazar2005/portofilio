import portfolioImg from "../assets/Cuisine.jpg";
import speedy from "../assets/Speedy.png";
import rentigoImg from "../assets/rentigo.png";

export const projects = [
  {
    id: 1,
    title: "Rentigo",

    description:
      "Web Car Rental Platform - Browse cars, filter by preferences, book online with a comprehensive admin dashboard for fleet",

    image: rentigoImg,

    technologies: ["React", "Node.js", "Tailwind CSS", "MongoDB", "Express"],

    github: "https://github.com/omarmoashraf/RentiGOO",
    demo: "https://renti-goo.vercel.app/",
  },
    {
    id: 2,
    title: "SpeedyRent",
    image: speedy,

    description:
      "Car Rental Management System - Console-based C++ application with 14 classes implementing object-oriented principles fo..",

    technologies: ["C++", "OOP", "Classes", "File Handling"],

    github: "https://github.com/Elgazar2005/Speedy_rent",
    demo: "",
  },
  {
    id: 3,
    title: "Cuisine Control",

    description:
      "Restaurant POS System - Python console application with JSON data storage for managing orders, menu items, and...",

    image: portfolioImg,

    technologies: ["Python", "JSON", "Console UI"],

    github: "https://github.com/Muhammad-A-Foad72/PythonProject-Fall24",
    demo: "",
  },


];
