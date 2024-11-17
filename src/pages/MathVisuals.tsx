import Container from "react-bootstrap/Container";
import MathCard from "../components/MathCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../App.css";
import functionImage from "../assets/function.png";

function MathVisuals() {
  return (
    <div className="mainDiv">
      <h1> Visualizations of Mathematical concepts</h1>
      <Container>
        <h1> Visualizations of Mathematical concepts</h1>
        <h2>Calculus</h2>
        <Row sm="auto">
          <Col>
            <MathCard
              title="Functions"
              image={functionImage}
              onSelectCard={() => {}}
            ></MathCard>
          </Col>
          <Col>
            <MathCard
              title="Derivatives"
              image={functionImage}
              onSelectCard={() => {}}
            ></MathCard>
          </Col>
          <Col>
            <MathCard
              title="Integrals"
              image={functionImage}
              onSelectCard={() => {}}
            ></MathCard>
          </Col>
        </Row>{" "}
        <h2>Geometry</h2>
        <Row sm="auto">
          <Col>
            <MathCard
              title="Pythagorean theorem"
              image={functionImage}
              onSelectCard={() => {}}
            ></MathCard>
          </Col>
          <Col>
            <MathCard
              title="The unit circle"
              image={functionImage}
              onSelectCard={() => {}}
            ></MathCard>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MathVisuals;
