import { useState } from "react";
import { Link } from "react-scroll";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav id="hamburger-nav">
        <div className="logo">NS Code</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span />
            <span />
            <span />
          </div>
          <div className={isOpen ? "menu-links open" : "menu-links"}>
            <ul>
              <li>
                <Link
                  to="about"
                  spy="true"
                  smooth="false"
                  duration={100}
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="experience"
                  spy="true"
                  smooth="false"
                  duration={100}
                  onClick={toggleMenu}
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  spy="true"
                  smooth="false"
                  duration={100}
                  onClick={toggleMenu}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="github"
                  spy="true"
                  smooth="false"
                  duration={100}
                  onClick={toggleMenu}
                >
                  Github
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy="true"
                  smooth="false"
                  duration={100}
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
