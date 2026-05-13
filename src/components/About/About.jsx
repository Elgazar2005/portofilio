import React from "react";
import { GraduationCap, Code, Users, Globe } from "lucide-react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
function About() {
  return (
    <section id="about" className="py-20 px-5 md:px-15 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Poppins'] font-bold text-3xl md:text-4xl mb-12 text-center text-foreground">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Introduction with Profile Image */}
          <div>
            {/* Profile Image */}
            <div className="mb-6 flex justify-center md:justify-start"></div>

            <h3 className="font-['Poppins'] font-semibold text-2xl mb-4 text-foreground">
              Hello! I'm Omar
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A passionate Computer Science student at Zewail City of Science
              and Technology, specializing in Software Development. I enjoy
              creating interactive and user-friendly web applications using
              modern technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey in programming started with C++ and has evolved to
              include full-stack web development with React and Python. I'm
              constantly learning and exploring new technologies to enhance my
              skill set.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 p-8 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-['Poppins'] font-semibold text-xl mb-2 text-foreground">
                  Education
                </h3>
                <p className="font-semibold text-foreground">
                  Zewail City of Science and Technology
                </p>
                <p className="text-muted-foreground">Software Development</p>
                <p className="text-muted-foreground">2024 – 2028</p>
              </div>
            </div>
          </div>
        </div>
      </div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  
  <Card className="w-full rounded-lg hover:shadow-lg dark:hover:shadow-accent/10 transition-shadow">
    <CardBody>
      <Typography variant="h5" color="blue-gray" className="mb-2 flex gap-3 items-center">
        <div className="bg-light-blue-400/10 dark:bg-primary/20 p-2 rounded-lg">
          <Code className="w-5 h-5 text-light-blue-300" />
        </div>
        <h3 className="font-['Poppins'] font-semibold text-lg text-foreground">
          Technical Skills
        </h3>
      </Typography>
      <Typography>
        Because it&apos;s about motivating the doers. Because I&apos;m
        here to follow my dreams and inspire others.
      </Typography>
    </CardBody>
  </Card>

  <Card className="w-full rounded-lg hover:shadow-lg dark:hover:shadow-accent/10 transition-shadow">
    <CardBody>
      <Typography variant="h5" color="blue-gray" className="mb-2 flex gap-3 items-center">
        <div className="bg-light-chart-5/40 dark:bg-accent/20 p-2 rounded-lg">
          <Users className="w-5 h-5 text-accent" />
        </div>
        <h3 className="font-['Poppins'] font-semibold text-lg text-foreground">
          Soft Skills
        </h3>
      </Typography>
      <Typography>
        Because it&apos;s about motivating the doers. Because I&apos;m
        here to follow my dreams and inspire others.
      </Typography>
    </CardBody>
  </Card>

  <Card className="w-full rounded-lg hover:shadow-lg dark:hover:shadow-accent/10 transition-shadow">
    <CardBody>
      <Typography variant="h5" color="blue-gray" className="mb-2 flex gap-3 items-center">
        <div className="bg-secondary/10 dark:bg-secondary/20 p-2 rounded-lg">
          <Globe className="w-5 h-5 text-secondary" />
        </div>
        <h3 className="font-['Poppins'] font-semibold text-lg text-foreground">
          Languages
        </h3>
      </Typography>
      <Typography>
        Because it&apos;s about motivating the doers. Because I&apos;m
        here to follow my dreams and inspire others.
      </Typography>
    </CardBody>
  </Card>

</div>
    </section>
  );
}

export default About;
