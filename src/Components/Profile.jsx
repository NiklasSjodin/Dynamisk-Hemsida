import ProfilePic from "../assets/profile-pic.png";
import LinkedinLogo from "../assets/linkedinlogo.png";
import GithubLogo from "../assets/github.png";
import { Link} from "react-scroll";
import { NavLink } from "react-router-dom";


export default function Profile() {
 /*  const openResume = () => {
    window.open(
      "https://niklassjodin.github.io/Dynamisk-Hemsida/resume",
      "_blank"
    ); // Öppna Resume i ett nytt fönster
  }; */

  return (
    <>
      <section id="profile">
        <div className="section__pic-container">
          <img
            src={ProfilePic}
            alt="Niklas Sjödin profile picture"
            className="profile_pic"
          />
        </div>
        <div className="section__text">
          <p className="section__text_p1">Hello, Im</p>
          <h1 className="title">Niklas Sjödin</h1>
          <p className="section__text_p2">Fullstack Developer</p>
          <div className="btn-container">
            <NavLink to="/resume" target="_blank">
              <button className="btn btn-color-2" /* onClick={openResume} */>
                CV
              </button>
            </NavLink>
            <Link to="contact" spy={true} smooth={true} duration={100}>
              <button className="btn btn-color-1">Contact Info</button>
            </Link>
          </div>
          <div id="socials-container">
            <a
              href="https://se.linkedin.com/in/niklas-sj%C3%B6din-626438b9?trk=people-guest_people_search-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                id="linkedin-icon"
                src={LinkedinLogo}
                alt="My LinkedIn profile"
                className="icon"
              />
            </a>
            <a
              href="https://github.com/NiklasSjodin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                id="github-icon"
                src={GithubLogo}
                alt="My Github profile"
                className="icon"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
