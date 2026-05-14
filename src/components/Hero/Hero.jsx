import React from "react";
import hero from "../../assets/hero.png";

function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-5 md:px-15 pt-20  bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-gray-800 dark:via-light-500 dark:to-blue-800">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div className="order-2 md:order-1">
            <h1 className="font-['Poppins'] font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground text-black dark:text-dark-foreground">
              Hi, I'm <span className="text-blue-700">Omar Elgazar</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed dark:text-light-switch-background text-light-foreground">
              I'm a Computer Science student specializing in frontend
              development. Explore my projects to see how I build practical,
              real-world applications.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed text-light-foreground dark:text-light-switch-background">
              Currently studying at{" "}
              <span className="text-light-sidebar-foreground dark:text-light-background font-bold">
                Zewail City of Science and Technology,
              </span>{" "}
              I'm passionate about creating interactive web experiences with
              React and Python. I enjoy solving real-world problems through code
              and continuously learning new technologies.
            </p>
            <div className="flex flex-wrap gap-4 mb-4">
              <button
                onClick={scrollToProjects}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg bg-light-blue-500 text-white "
              >
                Projects
              </button>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-transparent border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all transform hover:scale-105 dark:text-white"
              >
                Get In Touch
              </a>

              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/Omar_Elgazar_CV.pdf";
                  link.download = "Omar_Elgazar_CV.pdf";
                  link.click();
                }}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg bg-light-blue-500 text-white"
              >
                Download CV
              </button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center items-center ">
            <div className="relative flex items-center justify-center">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl "></div>
              <img
                src={hero}
                alt="Omar Elgazar"
                className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-full object-cover object-top border-8 border-background shadow-2xl z-10"
              />
              <div className="absolute -inset-2 border-4 border-primary/30 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
