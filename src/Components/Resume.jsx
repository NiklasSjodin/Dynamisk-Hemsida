import Json from "../Json/resume.json";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Resume() {
  return (
    <section id="#resume" className="resume-container">
      <div className="column">
        <h2 className="printRemove">Education</h2>
        {Json.education.map((edu) => {
          return (
            <Card style={{ width: "18rem" }} key={edu.name}>
              <Card.Body>
                <Card.Title>School: {edu.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Years: {edu.years}
                </Card.Subtitle>
                <Card.Text>Education: {edu.description}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <div className="column">
        <h2 className="printRemove">Work Experience</h2>
        {Json.work.map((wrk) => {
          return (
            <Card style={{ width: "18rem" }} key={wrk.name}>
              <Card.Body>
                <Card.Title>Name: {wrk.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Years: {wrk.years}
                </Card.Subtitle>
                <Card.Text>
                  Position: {wrk.position} <br />
                  Description: {wrk.description}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
