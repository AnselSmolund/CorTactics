import React from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css";
import Video1 from "./images/CTMorphology.mov";
import Video2 from "./images/trimedCT.mp4";
import Video3 from "./images/30DayHalt.mov";
import Video4 from "./images/undersizedWatchmanDevice.mov";

export const HeartScans = props => {
  const videoStyle = {
    display: "flex",
    justifyContent: "center"
  };
  return (
    <Container>
      <h1 className="display-4" style={props.headerStyle}>
        Structural Heart Cases
      </h1>
      <Row style={{ marginBottom: 50 }}>
        <Col>
          <video
            className="d-block w-100"
            style={videoStyle}
            preload="true"
            autoPlay
            loop
            autobuffer
            muted
            playsinline
            src={Video1}
          ></video>
          <h3>Aortic and Pulmonic Mechanical Valves</h3>
          <p>Multiple valve disease</p>
        </Col>
        <Col>
          <video
            className="d-block w-100"
            style={videoStyle}
            preload="true"
            autoPlay
            loop
            autobuffer
            muted
            playsinline
            src={Video4}
          ></video>
          <h3>Undersized Watchman Device</h3>
          <p>Multiple valve disease</p>
        </Col>
      </Row>
      <Row style={{ marginBottom: 50 }} id="heartcase-videos">
        <Col>
          <video
            className="d-block w-100"
            style={videoStyle}
            preload="true"
            autoPlay
            loop
            autobuffer
            muted
            playsinline
            src={Video3}
          ></video>
          <h3> Post TAVR With 30 Day HALT </h3>
          <p> Hypoattenuated Leaflet Thickening is present</p>
        </Col>
        <Col>
          <video
            className="d-block w-100"
            style={videoStyle}
            preload="true"
            autoPlay
            loop
            autobuffer
            muted
            playsinline
            src={Video2}
          ></video>
          <h3>CT Morphology</h3>
          <p>Multiple valve disease</p>
        </Col>
      </Row>
    </Container>
  );
};

export default HeartScans;
