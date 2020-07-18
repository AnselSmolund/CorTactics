import React from "react";
import "./Home.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export const MainCover = props => {
  return (
    <Jumbotron id="main-cover" fluid>
      <Container>
        <Row>
          <Col id="title-header">
            <h1 id="welcome-to"> Welcome to </h1>
            <h1 id="cor"> COR</h1>
            <h1 id="tactics"> Tactics </h1>
            <p>
              An <strong>experienced</strong> consulting team that delivers
              training and protocols designed to <strong>elevate</strong> your
              Cardiovascular CT program’s <strong>success</strong>.
            </p>
            <Button href="/contact" style={{ margin: 10 }}>
              Get In Touch
            </Button>
            <Button href="/about" style={{ margin: 10 }}>
              Learn More
            </Button>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default MainCover;
