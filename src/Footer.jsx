import React from "react";
import "./Home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import mainLogo from "./images/main-logo-grey.jpg";
import {
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaPhone,
  FaEnvelope
} from "react-icons/fa";

export const Footer = props => {
  return (
    <footer>
      <Container fluid style={{ paddingTop: 20 }}>
        <Row style={{ textAlign: "left" }}>
          <Col>
            <h3 id="footer-title">CorTactics</h3>
            <p>
              An experienced consulting team that delivers training and
              protocols designed to elevate your Cardiovascular CT program’s
              success.
            </p>
            <Image src={mainLogo} style={{ width: 300 }}></Image>
          </Col>
          <Col>
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/about">About us</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/testimonials">Testimonials</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </Col>
          <Col>
            <h5 class="text-uppercase">Services</h5>
            <ul class="list-unstyled">
              <li>
                <a href="services.html#ct_acq"> CT Acquisition </a>
              </li>
              <li>
                <a href="services.html#3D_sizing"> 3 Dimensional CT Sizing </a>
              </li>
              <li>
                <a href="services.html#allergy">
                  Nursing and Patient Protocols{" "}
                </a>
              </li>
              <li>
                <a href="services.html#education">
                  Proven Staff Education and Positioning{" "}
                </a>
              </li>
              <li>
                <a href="services.html#p_ct_acq">
                  {" "}
                  Pediatric Congenital CT Acquisition
                </a>
              </li>
            </ul>
          </Col>
          <Col>
            <h5 className="text-uppercase">Contact</h5>
            <ul class="list-unstyled">
              <li>
                <p>
                  <FaPhone style={{ marginRight: 10 }}></FaPhone>
                  <a href="tel:612-991-7118"> 612-991-7118</a>
                </p>
              </li>
              <li>
                <p>
                  <FaEnvelope style={{ marginRight: 10 }}></FaEnvelope>
                  <a href="mailto:david.caye@cortactics.com">
                    David.Caye@cortactics.com
                  </a>
                </p>
              </li>
              <li style={{ fontSize: 40 }}>
                <a href="https://www.linkedin.com/in/david-caye-93053626/">
                  <FaLinkedin
                    style={{ margin: 10, marginLeft: 0 }}
                  ></FaLinkedin>
                </a>
                <a href="https://www.facebook.com/CorTactics/">
                  <FaFacebook style={{ margin: 10 }}></FaFacebook>
                </a>
                <a href="https://twitter.com/DavidCaye2">
                  <FaTwitter style={{ margin: 10 }}></FaTwitter>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <div className="text-center" style={{ paddingBottom: 30 }}>
          <p style={{ fontSize: 13 }}>
            {" "}
            Images provided by{" "}
            <a style={{ color: "#14A1E8" }} href="https://www.circlecvi.com/">
              Circle Cardiovascular Imaging
            </a>{" "}
            and{" "}
            <a style={{ color: "#14A1E8" }} href="https://www.vitalimages.com/">
              Vital Images
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
