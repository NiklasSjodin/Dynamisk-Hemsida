import AboutPic from "../assets/about-pic.png";
import Arrow from "../assets/arrow.png";
import Experience from "../assets/experience.png";
import Education from "../assets/education.png";

import { Link } from "react-scroll";

export default function About() {
  return (
    <>
      <section id="about">
        <p className="section__text_p1">Get to Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img src={AboutPic} alt="Profile picture" className="about-pic" />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img src={Experience} alt="Experience icon" className="icon" />
                <h3>Experience</h3>
                <p>
                  Coop - Current.
                  <br />
                  Martin &amp; Servera
                </p>
              </div>
              <div className="details-container">
                <img src={Education} alt="Education icon" className="icon" />
                <h3>Education</h3>
                <p>
                  Chas Academy - Current.
                  <br />
                  Tumba Gymnasium.
                </p>
              </div>
            </div>
            <div className="text-container">
              <p>
                Im a Chas Academy student on the road to becoming a Fullstack
                .NET Developer, set to graduate in 2025. Enthusiastic about
                mastering coding intricacies, tackling complex challenges, and
                embracing the dynamic world of technology. Committed to
                continuous learning and passionate about crafting innovative
                solutions.
              </p>
            </div>
          </div>
        </div>
        <Link to="experience" spy={true} smooth={false} duration={100}>
          <img src={Arrow} alt="Arrow icon" className="icon arrow" />
        </Link>
      </section>
    </>
  );
}
