import { Link } from "react-scroll";

const toggleMenu = () => {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
};

export default function Nav() {
  return (
    <nav id="desktop-nav" onClick={toggleMenu}>
      <div className="logo">NS Code</div>
      <div>
        <ul className="nav-links">
          <li>
            <Link
              to="about"
              spy={true}
              smooth={false}
              duration={100}
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              spy={true}
              smooth={false}
              duration={100}
              onClick={toggleMenu}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="github"
              spy={true}
              smooth={false}
              duration={100}
              onClick={toggleMenu}
            >
              Github
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={false}
              duration={100}
              onClick={toggleMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={false}
              duration={100}
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
