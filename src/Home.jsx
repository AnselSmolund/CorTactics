import React from "react";
import "./Home.css";
import MainCover from "./MainCover";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Scan1 from "./images/scan1.jpg";
import Image from "react-bootstrap/Image";
import HeartScans from "./HeartScans";
import cardiacImg from "./images/cardiac.jpg";
import Footer from "./Footer";

export const Home = props => {
  const headerStyle = {
    textAlign: "center",
    marginBottom: 40,
    paddingTop: 10,
    paddingBottom: 10,
    background: "#5454540F"
  };
  return (
    <>
      <MainCover></MainCover>
      <Container style={{ marginBottom: 50, paddingTop: 40 }}>
        <Row>
          <Col style={headerStyle}>
            <h1 className="display-4">About CorTactics</h1>
          </Col>
        </Row>
        <Row>
          <Col
            md={7}
            style={{ marginBottom: 20, marginTop: 20, textAlign: "left" }}
          >
            <p style={{ fontSize: 18 }}>
              Welcome to CorTactics. We are an experienced consulting team that
              delivers training and protocols designed to elevate your
              Cardiovascular CT program’s success. Cardiac CT image acquisition
              training cannot be taught with a one-size-fits-all philosophy.
              CorTactics approaches each individual site by assessing its
              current Cardiac CT team’s experience, equipment and staffing
              situation, we then deliver a tailored approach to your team so it
              can achieve its primary objectives. Providing the answer Our
              Technologists have been performing Cardiac CT since 2004, and we
              have experienced through trial-and-error what it takes to
              routinely achieve the highest quality scans. Our tactical approach
              along with our protocols have been thoroughly tested, and we feel
              there is no obstacle we can’t overcome to obtain optimal results.
              Browse our site to learn more about what we offer, and don't
              hesitate to reach out with any questions, one of our team members
              would be happy to help.
            </p>
            <Button href="/about">Learn More</Button>
          </Col>
          <Col md={5}>
            <Image src={Scan1} fluid></Image>
          </Col>
        </Row>
      </Container>
      <HeartScans headerStyle={headerStyle}></HeartScans>
      <Container style={{ marginBottom: 100 }}>
        <Row>
          <Col style={headerStyle}>
            <h1 className="display-4">Tailored Suite of Services</h1>
          </Col>
        </Row>
        <Row>
          <Col style={{ marginBottom: 20, marginTop: 40, textAlign: "left" }}>
            <p>
              We deliver a tailored approach to each individual site by
              assessing current Cardiac CT experience, CT equipment and the
              staffing situation. We have been performing Cardiac CT since 2004,
              so we have experienced through trial-and-error what it takes to
              get the best scans.{" "}
            </p>
            <br />
            <p> Some of the services we offer </p>
            <ul>
              <li>
                <a href="/services#ct_acq"> CT Acquisition </a>
              </li>
              <li>
                <a href="/services#3D_sizing"> 3 Dimensional CT Sizing </a>
              </li>
              <li>
                <a href="/services#allergy">Nursing and Patient Protocols</a>
              </li>
              <li>
                <a href="/services#education">
                  Patient Education and Positioning
                </a>
              </li>
              <li>
                <a href="/services#p_ct_acq">
                  Pediatric Congenital CT Acquisition
                </a>
              </li>
            </ul>
            <div className="text-center">
              <Button href="/services">See All Services</Button>
            </div>
          </Col>
          <Col>
            <Image src={cardiacImg} fluid></Image>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Home;
