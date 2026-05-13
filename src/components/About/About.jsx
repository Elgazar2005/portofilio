import React from "react";
import { GraduationCap, Code, Users, Globe } from "lucide-react";
import { skills } from "../../data/skills";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
function About() {
  return (
    <section id="about" className="py-20 px-5 md:px-15 bg-light-background dark:!bg-dark-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Poppins'] font-bold text-3xl md:text-4xl mb-12 text-center text-dark-background dark:text-light-background">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Introduction with Profile Image */}
          <div>
            {/* Profile Image */}
            <div className="mb-6 flex justify-center md:justify-start"></div>

            <h3 className="font-['Poppins'] font-semibold text-2xl mb-4 text-light-sidebar-primary dark:text-dark-sidebar-foreground">
              Hello! I'm Omar
            </h3>
            <p className="dark:text-light-sidebar-ring text-light-muted-foreground leading-relaxed mb-4">
              A passionate Computer Science student at Zewail City of Science
              and Technology, specializing in Software Development. I enjoy
              creating interactive and user-friendly web applications using
              modern technologies.
            </p>
            <p className="dark:text-light-sidebar-ring text-light-muted-foreground leading-relaxed">
              My journey in programming started with C++ and has evolved to
              include full-stack web development with React and Python. I'm
              constantly learning and exploring new technologies to enhance my
              skill set.
            </p>
          </div>

          <div className="bg-light-ring/25 dark:bg-dark-card p-8 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="dark:bg-light-chart-3 bg-dark-chart-1 text-white p-3 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-['Poppins'] font-semibold text-xl mb-2 text-foreground dark:text-dark-sidebar-primary-foreground">
                  Education
                </h3>
                <p className="font-semibold text-foreground dark:text-dark-sidebar-primary-foreground">
                  Zewail City of Science and Technology
                </p>
                <p className="dark:text-light-sidebar-ring text-light-muted-foreground leading-relaxed">Software Development</p>
                <p className="dark:text-light-sidebar-ring text-light-muted-foreground leading-relaxed">2024 – 2028</p>
              </div>
            </div>
          </div>
        </div>
      </div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  
  <Card className="w-full rounded-lg p-6 hover:shadow-lg dark:hover:shadow-dark-primary/50 transition-shadow bg-light-card dark:bg-dark-card">
    <CardBody>
      <Typography variant="h5" color="blue-gray" className="mb-4 flex gap-3 items-center ">
        <div className="bg-light-blue-400/10 dark:bg-primary/20 p-2 rounded-lg">
          <Code className="w-5 h-5 text-light-blue-300" />
        </div>
        <h3 className="font-['Poppins'] font-semibold text-lg text-light-popover-foreground dark:text-dark-sidebar-primary-foreground ">
          Technical Skills
        </h3>
      </Typography>
       <div className="flex flex-wrap gap-2 mt-2">
    {skills.Technical_Skills.map((skill, index) => (
      <span key={index} className="bg-light-blue-300 text-white text-sm px-3 py-1 rounded-full">
        {skill}
      </span>
    ))}
  </div>
    </CardBody>
  </Card>

  <Card className="w-full rounded-lg p-6 hover:shadow-lg dark:hover:shadow-dark-primary/50 transition-shadow bg-light-card dark:bg-dark-card">
    <CardBody>
      <Typography variant="h5" color="blue-gray" className="mb-4 flex gap-3 items-center">
        <div className="bg-light-chart-5/40 dark:bg-accent/20 p-2 rounded-lg">
          <Users className="w-5 h-5 text-white" />
        </div>
       <h3 className="font-['Poppins'] font-semibold text-lg text-light-popover-foreground dark:text-dark-sidebar-primary-foreground ">
          Soft Skills
        </h3>
      </Typography>
             <div className="flex flex-wrap gap-2  mt-2">
    {skills.soft_skills.map((skill, index) => (
      <span key={index} className="bg-light-chart-5/40  text-white text-sm px-3 py-1 rounded-full">
        {skill}
      </span>
    ))}
  </div>
    </CardBody>
  </Card>

  <Card className="w-full rounded-lg p-6 hover:shadow-lg dark:hover:shadow-dark-primary/50 transition-shadow bg-light-card dark:bg-dark-card">
    <CardBody>
      <Typography variant="h5" color="blue-gray" className="mb-4 flex gap-3 items-center">
        <div className="bg-light-sidebar-ring dark:bg-secondary/20 p-2 rounded-lg">
          <Globe className="w-5 h-5 text-secondary" />
        </div>
       <h3 className="font-['Poppins'] font-semibold text-lg text-light-popover-foreground dark:text-dark-sidebar-primary-foreground ">
          Languages
        </h3>
      </Typography>
       <div className="flex flex-col flex-wrap gap-2 mt-2">
    {skills.Languages.map((skill, index) => (
      <span key={index} className="bg-primary/10  text-primary dark:text-dark-foreground text-sm px-3 py-1 rounded-full">
        {skill}
      </span>
    ))}
  </div>
    </CardBody>
  </Card>

</div>
    </section>
  );
}

export default About;
