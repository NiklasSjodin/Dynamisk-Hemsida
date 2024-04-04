import { Link } from "react-scroll";

export default function Footer() {
  return (
    <>
      <footer>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li>
                <Link to="about" spy={true} smooth={true} duration={100}>
                  About
                </Link>
              </li>
              <li>
                <Link to="experience" spy={true} smooth={true} duration={100}>
                  Experience
                </Link>
              </li>
              <li>
                <Link to="github" spy={true} smooth={true} duration={100}>
                  Github
                </Link>
              </li>
              <li>
                <Link to="projects" spy={true} smooth={true} duration={100}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="contact" spy={true} smooth={true} duration={100}>
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="desktop-nav"
                  spy={true}
                  smooth={true}
                  duration={100}
                  className="scroll-to-top"
                >
                  Scroll to Top
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <p>Copyright © 2024 Niklas Sjödin. All Rights Reserved.</p>
      </footer>
    </>
  );
}
