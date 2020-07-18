import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import img1 from "./images/test1.png";
import img2 from "./images/test2.jpeg";
import img3 from "./images/scans/lima.png";
import img4 from "./images/scans/stent.png";
import img5 from "./images/scans/TAVR 3.png";
import Footer from "./Footer";

export const Testimonials = props => {
  return (
    <>
      <Container
        style={{ textAlign: "center", marginTop: 40, marginBottom: 100 }}
      >
        <h1 className="display-4" style={{ fontWeight: 600 }}>
          Testimonials
        </h1>
        <p>
          See what industry leading professionals are saying about CorTactics{" "}
        </p>
      </Container>
      <Container>
        <Row>
          <Col md={4}>
            <a href="https://www.linkedin.com/company/akureyri-hospital">
              <Image src={img1} fluid></Image>
            </a>
          </Col>
          <Col md={8}>
            <p>
              "Coronary CT was established at Akureyri Hospital in 2011. David
              Caye from Abbott Northwestern Hospital was hired as a technical
              consultant. He provided comprehensive training for technicians and
              doctors alike. His work and advice on technical and logistical
              issues was of great importance, regarding image quality, lower
              radiation dose, imaging of technically difficult cases, overall
              logistic and more. After initial onsite training and start up
              David provided valuable offsite assistance."
            </p>
            <br />
            <p>
              <strong>
                <i>
                  - Gunnar Thor Gunnarsson PhD FESC Akureyri Hospital, Iceland
                </i>
              </strong>
            </p>
          </Col>
        </Row>
        <hr />
        <Row style={{ marginTop: 50, marginBottom: 50 }}>
          <Col md={8}>
            <p>
              "David Caye helped us advance and improve the diagnostic quality
              of our cardiac imaging, particularly coronary and TAVR CTs. He
              quickly established a strong rapport with our physician leadership
              and diagnostic services teams. He was viewed as a credible and
              trusted expert. David also provided great support following the
              initial engagement and offered two years of ad hoc consultation to
              the clinical teams. Improving the quality of our cardiac CT
              program has had meaningful impact for patients.”
            </p>
            <br />
            <p>
              <strong>
                <i>
                  - Matthew Kolb, Chief Administrative Officer, Carle Health
                  System, Urbana, IL
                </i>
              </strong>
            </p>
          </Col>
          <Col md={4}>
            <a href="https://carle.org/">
              <Image src={img2} fluid></Image>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Testimonials;
