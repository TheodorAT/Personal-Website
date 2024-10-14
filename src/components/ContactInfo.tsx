import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "../App.css";

function ContactInfo() {
  return (
    <Container fluid className="bottom-contacts fluid">
      <div className="centered">
        <Button variant="light" className="icon-button">
          <a className="icon-link" href="https://github.com/TheodorAT">
            <i className="fa fa-github"></i>
          </a>
        </Button>
        <Button variant="light" className="icon-button">
          <a
            className="icon-link"
            href="https://www.linkedin.com/in/theodor-anderberg-törngren-2771611a1"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </Button>
        <Button variant="light" className="icon-button">
          <a
            className="icon-link"
            href="mailto:theodor.anderberg.torngren@gmail.com"
          >
            <i className="material-icons">mail_outline</i>
          </a>
        </Button>
        <div className="round-button"></div>
      </div>
    </Container>
  );
}

export default ContactInfo;
