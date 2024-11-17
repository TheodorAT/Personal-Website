import Container from "react-bootstrap/Container";
import profilePic from "../assets/profile.jpg";
import cv from "../assets/CV.pdf";
import "../App.css";
import "./Home.css";

function About() {
  return (
    <div className="mainDiv">
      <Container>
        <div className="section" id="header">
          <img className="profile" src={profilePic}></img>
          <div id="headerText">
            <h1>Theodor Anderberg Törngren</h1>
            <p>
              I am a fifth-year student of Engineering Physics at LTH with a
              specialization in Machine Learning. With several experiences of
              working with software development in both industrial and academic
              settings and a passion for solving difficult problems together and
              understanding new concepts.
            </p>
          </div>
        </div>
        <div className="section infoCards">
          <div className="infoCard">
            <h1>5th</h1>
            <p>Year Engineering Physics Student at LTH</p>
          </div>
          <div className="infoCard">
            <h1>4.5+</h1>
            <p>GPA out of 5</p>
          </div>
          <div className="infoCard">
            <h1>8</h1>
            <p>Course offerings as a TA in programming courses</p>
          </div>
          <div className="infoCard">
            <h1>150+</h1>
            <p>Hours of tutoring computer science at LTH</p>
          </div>
        </div>
        <div className="section" id="contactButtons">
          <button id="resumeButton">
            <a
              id="buttonContent"
              href={cv}
              download="Theodor_Anderberg_Torngren_CV" 
              target='_blank'
            >
              <i className="material-icons">file_download</i>
              <p> Download CV</p>
            </a>
          </button>
          <button id="connectButton">
            <a
              id="buttonContent"
              href="mailto:theodor.anderberg.torngren@gmail.com"
            >
              <i className="material-icons">mail_outline</i>
              <p> Contact me</p>
            </a>
          </button>
        </div>
      </Container>
    </div>
  );
}

export default About;
