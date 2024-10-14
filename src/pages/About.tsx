import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../App.css";

function About() {
  return (
    <div className="mainDiv">
      <Container>
        <h1>About me: </h1>
        <Row>
          <Col>Here I will insert an image</Col>
          <Col>Here is some text</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
