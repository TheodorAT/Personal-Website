import Container from "react-bootstrap/Container";
import LinkCard from "../components/LinkCard";
import "../App.css";
import "./Projects.css";
import functionImage from "../assets/function.png";
import solarSystemImage from "../assets/solar-system.png";
import nlpImage from "../assets/translation.png";
import femImage from "../assets/FEM-plot.png";
import agileImage from "../assets/agile.png";
import neuralNetworkImage from "../assets/neural-network.jpg";
import resumeImage from "../assets/resume.png";
import whiteNoiseImage from "../assets/white-noise.jpg";
import optimizationImage from "../assets/optimization.jpg";

function Projects() {
  return (
    <div className="mainDiv">
      <Container>
        <div id="menu">
          <div className="section">
            <h1>University Projects</h1>
            <div className="menu-items">
              <LinkCard
                title="Optimization for Machine Learning"
                image={optimizationImage}
                link="https://github.com/TheodorAT/ML-Optimization"
              ></LinkCard>
              <LinkCard
                title="Statistic Stochastic Processes"
                image={whiteNoiseImage}
                link="https://github.com/TheodorAT/StatStoch"
              ></LinkCard>
              <LinkCard
                title="Artificial Neural Networks"
                image={neuralNetworkImage}
                link="https://github.com/TheodorAT/Neural-Networks"
              ></LinkCard>
              <LinkCard
                title="Natural Language Processing"
                image={nlpImage}
                link="https://github.com/TheodorAT/Language-Technology"
              ></LinkCard>
              <LinkCard
                title="FEM Project"
                image={femImage}
                link="https://github.com/TheodorAT/Finite-Element-Method"
              ></LinkCard>
              <LinkCard
                title="Large Scale Software Engineering"
                image={agileImage}
                link="https://github.com/TheodorAT/Large-Scale-SoftEng"
              ></LinkCard>
            </div>
          </div>
          <div className="section">
            <h1>Personal Projects</h1>
            <div className="menu-items">
              <LinkCard
                title="Solar System Website"
                image={solarSystemImage}
                link="https://github.com/TheodorAT/SpaceWeb"
              ></LinkCard>
              <LinkCard
                title="This Portfolio Website"
                image={resumeImage}
                link="https://github.com/TheodorAT/Personal-Website"
              ></LinkCard>
              {/* <LinkCard
                title="Math Visualizations"
                image={functionImage}
                link="/math"
              ></LinkCard> */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Projects;
