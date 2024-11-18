import Container from "react-bootstrap/Container";
import LinkCard from "../components/LinkCard";
import "../App.css";
import "./MathVisuals.css";
import functionImage from "../assets/function.png";

function Projects() {
  return (
    <div className="mainDiv">
      <Container>
        <div id="menu">
          <div className="section">
            <h1>Geometry</h1>
            <div className="menu-items">
              <LinkCard
                title="The Pythagorean Theorem"
                image={functionImage}
                link="/math/pythagorean-theorem"
              ></LinkCard>
              <LinkCard
                title="The Unit Circle"
                image={functionImage}
                link="/math/unit-circle"
              ></LinkCard>
            </div>
          </div>
          <div className="section">
            <h1>Calculus</h1>
            <div className="menu-items">
              <LinkCard
                title="Differentials"
                image={functionImage}
                link="/math/differentials"
              ></LinkCard>
              <LinkCard
                title="Integrals"
                image={functionImage}
                link="/math/integrals"
              ></LinkCard>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Projects;
