import Container from "react-bootstrap/Container";
import LinkCard from "../components/LinkCard";
import "../App.css";
import functionImage from "../assets/function.png";

function Projects() {
  return (
    <div className="mainDiv">
      <Container>
        <div id="menu">
          <h1>Projects</h1>
          <div className="menu-items">
            <LinkCard
              title="Math Visualizations"
              image={functionImage}
              link="/math"
            ></LinkCard>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Projects;
