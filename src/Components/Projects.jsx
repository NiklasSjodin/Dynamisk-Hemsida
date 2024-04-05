import Netify from "../assets/netify-pic.png";
import BankNet from "../assets/banknet-pic.png";
import Api from "../assets/api-pic.png";
import Arrow from "../assets/arrow.png";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-scroll";

export default function Projects() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
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
                <Button
                  variant="btn btn-color-2 project-btn"
                  onClick={handleShow}
                >
                  More Info
                </Button>
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
                <Button
                  variant="btn btn-color-2 project-btn"
                  onClick={handleShow1}
                >
                  More Info
                </Button>
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
                <Button
                  variant="btn btn-color-2 project-btn"
                  onClick={handleShow2}
                >
                  More Info
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Link to="contact" spy={true} smooth={false} duration={100}>
          <img src={Arrow} alt="Arrow icon" className="icon arrow" />
        </Link>
      </section>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="title">Netify</Modal.Title>
        </Modal.Header>
        <Modal.Body className="section__text_p1">
          Welcome to the Netify Api. This projects involves creating a minimal
          API around the Spotify open access api.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="btn btn-color-2 project-btn" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title className="title">BankNet</Modal.Title>
        </Modal.Header>
        <Modal.Body className="section__text_p1">
          Welcome to BankNET! This project involves creating a user-friendly
          banking system, like an ATM or internet bank. Its a challenging
          project where well-structured code is essential to avoid confusion.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="btn btn-color-2 project-btn" onClick={handleClose1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title className="title">Mini API</Modal.Title>
        </Modal.Header>
        <Modal.Body className="section__text_p1">
          This project aims to develop a system for storing individuals
          essential details like names and phone numbers. It supports the
          storage of multiple interests per person, each having a title and
          brief description. Individuals can be connected to various interests,
          and multiple website links can be associated with both individuals and
          their interests
        </Modal.Body>
        <Modal.Footer>
          <Button variant="btn btn-color-2 project-btn" onClick={handleClose2}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
