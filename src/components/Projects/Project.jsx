import React from "react";
import { projects } from "../../data/projects";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Chip,
} from "@material-tailwind/react";

function Project() {
  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 md:px-10 lg:px-16 bg-light-background dark:!bg-dark-background"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Poppins'] font-bold text-3xl md:text-4xl mb-4 text-center text-light-sidebar-primary dark:text-dark-foreground">
          Projects
        </h2>
        <p className="text-center text-light-muted-foreground dark:text-dark-muted-foreground mb-12 max-w-2xl mx-auto">
          A showcase of my recent work in web development and software
          engineering
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col h-full rounded-lg hover:shadow-lg dark:hover:shadow-dark-primary/50 transition-shadow bg-light-card dark:bg-dark-card"
            >
              {/* Card Image */}
              <CardHeader
                floated={false}
                color="blue-gray"
                className="h-44 sm:h-48 m-0 rounded-b-none shrink-0"
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-400 text-sm">
                    No Image Available
                  </div>
                )}
              </CardHeader>

              {/* Card Body */}
              <CardBody className="flex flex-col flex-1 p-4 sm:p-5">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 font-semibold dark:text-white text-base sm:text-lg"
                >
                  {project.title}
                </Typography>

                <Typography
                  color="gray"
                  className="text-sm mb-4 flex-1 dark:text-gray-400"
                >
                  {project.description}
                </Typography>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      value={tech}
                      size="sm"
                      variant="ghost"
                      color="blue"
                      className="rounded-full text-xs dark:text-white"
                    />
                  ))}
                </div>
              </CardBody>

              {/* Card Footer */}
<CardFooter className="pt-0 px-4 sm:px-5 pb-4 sm:pb-5 flex flex-col gap-2 shrink-0">
  <Button
    size="sm"
    variant="outlined"
    onClick={() => window.open(project.github, "_blank")}
    className="flex items-center justify-center gap-2 bg-transparent border-2 border-primary text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all transform hover:scale-105 dark:text-white text-xs sm:text-sm"
  >
    GitHub
  </Button>

  {project.demo && project.demo !== "" && (
    <Button
      size="sm"
      color="blue"
      onClick={() => window.open(project.demo, "_blank")}
      className="w-full flex items-center justify-center gap-2 ..."
    >
      Live Demo
    </Button>
  )}
</CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button
            color="blue"
            onClick={() => window.open("https://github.com/Elgazar2005?tab=repositories", "_blank")}
            className="flex items-center justify-center gap-2"
          >
            View More
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Project;