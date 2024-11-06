import Container from "react-bootstrap/Container";
import LinkCard from "../components/LinkCard";
import "../App.css";
import functionImage from "../assets/function.png";
import solarSystemImage from "../assets/solar-system.png";
import nlpImage from "../assets/translation.png";
import femImage from "../assets/FEM-plot.png";
import agileImage from "../assets/agile.png";

function Projects() {
  return (
    <div className="mainDiv">
      <Container>
        <div id="menu">
          <h1>University Projects</h1>
          <div className="menu-items">
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
          <h1>Personal Projects</h1>
          <div className="menu-items">
            <LinkCard
              title="Math Visualizations"
              image={functionImage}
              link="/math"
            ></LinkCard>
            <LinkCard
              title="Solar System Website"
              image={solarSystemImage}
              link="https://github.com/TheodorAT/SpaceWeb"
            ></LinkCard>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Projects;
