import Netify from "../assets/netify-pic.png";
import BankNet from "../assets/banknet-pic.png";
import Api from "../assets/api-pic.png";
import Arrow from "../assets/arrow.png";

import { Link } from "react-scroll";

export default function Projects() {
  return (
    <>
      <section id="projects">
        <p className="section__text_p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img src={Netify} alt="Project 1" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">Netify</h2>
              <div className="btn-container">
                <a
                  href="https://github.com/HjalmarStranninge/Netify"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-color-2 project-btn">
                    Github
                  </button>
                </a>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img src={BankNet} alt="Project 2" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">BankNET</h2>
              <div className="btn-container">
                <a
                  href="https://github.com/HjalmarStranninge/BankNET"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-color-2 project-btn">
                    Github
                  </button>
                </a>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img src={Api} alt="Project 3" className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">API</h2>
              <div className="btn-container">
                <a
                  href="https://github.com/NiklasSjodin/Miniprojekt-API"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-color-2 project-btn">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Link to="contact" spy={true} smooth={false} duration={100}>
          <img src={Arrow} alt="Arrow icon" className="icon arrow" />
        </Link>
      </section>
    </>
  );
}
