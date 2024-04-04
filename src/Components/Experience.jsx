import Checkmark from "../assets/checkmark.png";
import Arrow from "../assets/arrow.png";

import { Link } from "react-scroll";

export default function Experience() {
  return (
    <>
      <section id="experience">
        <p className="section__text_p1">Explore My</p>
        <h1 className="title">Experience</h1>
        <div className="experience-details container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container">
                <article>
                  <img src={Checkmark} alt="Experience" className="icon" />
                  <div>
                    <h3>HTML</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img src={Checkmark} alt="Experience" className="icon" />
                  <div>
                    <h3>CSS</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img src={Checkmark} alt="Experience" className="icon" />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Learning</p>
                  </div>
                </article>
                <article>
                  <img src={Checkmark} alt="Experience" className="icon" />
                  <div>
                    <h3>Figma</h3>
                    <p>Basic</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Backend Development</h2>
              <div className="article-container">
                <article>
                  <img src={Checkmark} alt="Experience" className="icon" />
                  <div>
                    <h3>C#</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img src={Checkmark} alt="Experience" className="icon" />
                  <div>
                    <h3>MySQL</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img src={Checkmark} alt="Experience" className="icon" />
                  <div>
                    <h3>Git</h3>
                    <p>Basic</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <Link to="github" spy={true} smooth={false} duration={100}>
          <img src={Arrow} alt="Arrow icon" className="icon arrow" />
        </Link>
      </section>
    </>
  );
}
