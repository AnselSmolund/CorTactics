import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import img1 from "./images/graph.png";
import img2 from "./images/open-book.png";
import img3 from "./images/team.png";
import img4 from "./images/project-management.png";
import img5 from "./images/scans/cardiac 2.png";
import img6 from "./images/EKGStrip.png";
import Footer from "./Footer";

export const SingleService = props => {
  return (
    <Row
      id={props.id}
      style={{ marginBottom: 50, border: "1px solid black", padding: 10 }}
    >
      <Col md={8} style={{ textAlign: "left" }}>
        <h1> {props.title} </h1>
        <ul style={{ marginLeft: -20, fontSize: 14 }}>{props.children}</ul>
      </Col>

      <Col md={4}>
        <span
          style={{
            display: "inline-block",
            height: "100%",
            verticalAlign: "middle"
          }}
        ></span>
        <Image
          style={{
            verticalAlign: "middle"
          }}
          src={props.imgSrc}
          fluid
        ></Image>
      </Col>
    </Row>
  );
};

export default SingleService;
