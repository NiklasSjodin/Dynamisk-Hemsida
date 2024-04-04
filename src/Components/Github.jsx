import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { RingLoader } from "react-spinners";
import Arrow from "../assets/arrow.png";
import GithubPic from "../assets/github.png";

import { Link } from "react-scroll";

export default function Github() {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = "https://api.github.com/users/NiklasSjodin/repos";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const filteredRepos = data.filter((repo) => {
          return repo.language === "C#";
        });
        setTimeout(() => {
          setRepos(filteredRepos.slice(0, 3));
          setIsLoading(false);
        }, 3000);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="ring-loader">
        <RingLoader className="ring-loader" color="#0c130e" /> Hämtar data..
      </div>
    );
  }

  return (
    <>
      <section id="github">
        <p className="section__text_p1">Browse My Recent</p>
        <h1 className="title">Repos</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            {repos.map((repo) => {
              return (
                <div
                  key={repo.id}
                  className="details-container color-container"
                  id={`project${repo.id}`}
                >
                  <div className="article-container">
                    <img
                      src={GithubPic}
                      alt="Github Icon"
                      className="github-icon"
                    />
                  </div>
                  <h2 className="experience-sub-title project-title">
                    {repo.name}
                    <p>{repo.description}</p>
                  </h2>
                  <div className="btn-container">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btn btn-color-2 project-btn">
                        Github
                      </button>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Link to="projects" spy={true} smooth={false} duration={100}>
          <img src={Arrow} alt="Arrow icon" className="icon arrow" />
        </Link>
      </section>
    </>
  );
}
