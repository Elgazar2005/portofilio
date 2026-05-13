import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { FaSun, FaMoon, FaGithub } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import useTheme from "../../hooks/usetheme";
import { Link } from "react-router-dom";

function NavList({ onLinkClick }) {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:justify-center lg:gap-6 ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          onClick={onLinkClick}
          href="#"
          className="flex items-center transition-colors font-serif text-xl text-light-foreground dark:text-dark-foreground hover:text-blue-500 dark:hover:text-blue-400"
        >
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          onClick={onLinkClick}
          href="#about"
          className="flex items-center transition-colors font-serif text-xl text-light-foreground dark:text-dark-foreground hover:text-blue-500 dark:hover:text-blue-400"
        >
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          onClick={onLinkClick}
          href="#"
          className="flex items-center transition-colors font-serif text-xl text-light-foreground dark:text-dark-foreground hover:text-blue-500 dark:hover:text-blue-400"
        >
          Projects
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          onClick={onLinkClick}
          href="#"
          className="flex items-center transition-colors font-serif text-xl text-light-foreground dark:text-dark-foreground hover:text-blue-500 dark:hover:text-blue-400"
        >
          Contact
        </a>
      </Typography>
    </ul>
  );
}

function Header() {
  const [openNav, setOpenNav] = React.useState(false);
  const { theme, mode } = useTheme();

  React.useEffect(() => {
    const handleWindowResize = () =>
      window.innerWidth >= 960 && setOpenNav(false);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <Navbar className="!max-w-full w-full sticky z-50 top-0 px-4 py-2 lg:px-8 lg:py-4 !bg-light-background dark:!bg-dark-background !border-0 !shadow-none">
      <div className="flex items-center justify-between text-blue-gray-900 ">
        {/* Left - Logo */}
        <div className="flex-1 text-dark-background dark:text-light-background">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="cursor-pointer py-1.5 font-serif text-xl"
          >
            Omar Elgazar
          </Typography>
        </div>

        {/* Center - NavList (desktop only) */}
        <div className="hidden lg:flex flex-1 justify-center ">
          <NavList />
        </div>

        {/* Right - Icons + Mobile Toggle */}
        <div className="flex-1 flex items-center justify-end gap-3">
          {/* Social Icons - desktop only */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="https://www.linkedin.com/in/omar-elgazar-60352635a/">
              <FiLinkedin className="flex items-center transition-colors font-serif text-xl text-light-foreground dark:text-dark-foreground hover:text-blue-500 dark:hover:text-blue-400" />
            </Link>
            <Link to="https://github.com/Elgazar2005">
              <FaGithub className="flex items-center transition-colors font-serif text-xl text-light-foreground dark:text-dark-foreground hover:text-blue-500 dark:hover:text-blue-400" />
            </Link>
            <a
              href="https://mail.google.com/mail/?view=cm&to=omarelgazar512@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <CgMail className="flex items-center transition-colors font-serif text-xl text-light-foreground dark:text-dark-foreground hover:text-blue-500 dark:hover:text-blue-400" />
            </a>
          </div>

          {/* Theme Toggle */}
          <IconButton
            size="sm"
            variant="text"
            onClick={mode}
            className="flex items-center transition-colors font-serif text-xl text-light-foreground dark:text-dark-foreground hover:text-blue-500 dark:hover:text-blue-400"
          >
            {theme === "dark" ? (
              <FaSun className="h-4 w-4" />
            ) : (
              <FaMoon className="h-4 w-4" />
            )}
          </IconButton>
          <div className="lg:hidden flex gap-4">
            <Link to="https://www.linkedin.com/in/omar-elgazar-60352635a/">
              <FiLinkedin className="flex items-center transition-colors font-serif text-xl text-light-foreground dark:text-dark-foreground hover:text-blue-500 dark:hover:text-blue-400" />
            </Link>
            <Link to="https://github.com/Elgazar2005">
              <FaGithub className="flex items-center transition-colors font-serif text-xl text-light-foreground dark:text-dark-foreground hover:text-blue-500 dark:hover:text-blue-400" />
            </Link>
            <a
              href="https://mail.google.com/mail/?view=cm&to=omarelgazar512@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <CgMail className="flex items-center transition-colors font-serif text-xl text-light-foreground dark:text-dark-foreground hover:text-blue-500 dark:hover:text-blue-400" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <IconButton
            variant="text"
            className="h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-light-foreground dark:text-dark-foreground hover:text-blue-500 dark:hover:text-blue-400"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
      </div>

      {/* Mobile Menu */}
      <Collapse open={openNav}>
       <NavList onLinkClick={() => setOpenNav(false)} />
      </Collapse>
    </Navbar>
  );
}

export default Header;
