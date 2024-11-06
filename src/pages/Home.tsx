import Container from "react-bootstrap/Container";
import profilePic from "../assets/profile.jpg";
import "../App.css";

function About() {
  return (
    <div className="mainDiv">
      <Container>
        <div className="row">
          <h1>Theodor Anderberg Törngren</h1>
          <img className="profile" src={profilePic}></img>
        </div>
        <div className="infoCards">
          <div className="infoCard">
            <p>5th year Engineering Physics Student at LTH</p>
          </div>
          <div className="infoCard">
            <p>Specialization towards Machine Learning and Software</p>
          </div>
          <div className="infoCard">
            <p>Passionate about learning and problem solving</p>
          </div>
          <div className="infoCard">
            <p>Some text</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
