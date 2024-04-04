import { Link } from "react-router-dom";
import LinkedinLogo from "../assets/linkedinlogo.png";
import EmailLogo from "../assets/email.png";

export default function Contact() {
  return (
    <>
      <section id="contact">
        <p className="section__text_p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img
              src={EmailLogo}
              alt="Email icon"
              className="icon contact-icon email-icon"
            />
            <p>
              <Link
                to="mailto:examplemail@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                as="a"
              >
                Sjoodiin@hotmail.com
              </Link>
            </p>
          </div>
          <div className="contact-info-container">
            <img
              src={LinkedinLogo}
              alt="LinkedIn icon"
              className="icon contact-icon"
            />
            <p>
              <Link
                to="https://se.linkedin.com/in/niklas-sj%C3%B6din-626438b9?trk=people-guest_people_search-card"
                target="_blank"
                rel="noopener noreferrer"
                as="a"
              >
                LinkedIn
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
