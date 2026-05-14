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
      className="py-20 px-5 md:px-15 bg-light-background dark:!bg-dark-background"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="font-['Poppins'] font-bold text-3xl md:text-4xl mb-4 text-center text-light-sidebar-primary dark:text-dark-foreground">
          Projects
        </h2>
        <p className="text-center text-light-muted-foreground dark:text-dark-muted-foreground mb-12 max-w-2xl mx-auto">
          A showcase of my recent work in web development and software
          engineering
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="w-full rounded-lg p-6 hover:shadow-lg dark:hover:shadow-dark-primary/50 transition-shadow bg-light-card dark:bg-dark-card"
            >
              {/* Card Image */}
              <CardHeader
                floated={false}
                color="blue-gray"
                className="h-48 m-0 rounded-b-none"
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
              <CardBody className="flex flex-col flex-1 p-5">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 font-semibold dark:text-white"
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
                <div className="flex flex-wrap gap-2">
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
              <CardFooter className="pt-0 px-5 pb-5 flex gap-3">
                <Button
                  size="md"
                  fullWidth
                  variant="outlined"
                  onClick={() => window.open(project.github, "_blank")}
                  className="flex items-center justify-center gap-2 bg-transparent border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all transform hover:scale-105 dark:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4 "
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </Button>

                {project.demo && (
                  <Button
                    size="md"
                    fullWidth
                    color="blue"
                    onClick={() => window.open(project.demo, "_blank")}
                    className="flex items-center justify-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3H13.5a.75.75 0 010 1.5H5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
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
                    className="flex items-center justify-center gap-2">View More</Button>
        </div>
      </div>
    </section>
  );
}

export default Project;
