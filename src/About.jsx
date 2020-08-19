import React from "react";
import "./About.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import img1 from "./images/scans/CardiacDonna.jpg";
import img2 from "./images/dave-headshot4.jpg";
import img3 from "./images/scans/lima.png";
import img4 from "./images/scans/stent.png";
import img5 from "./images/scans/TAVR 3.png";
import DaveHeadshot from "./images/dave_headshot.JPG";

export const About = props => {
  return (
    <Container
      style={{
        marginTop: 50,
        marginBottom: 100,
        textAlign: "left",
        fontWeight: 300
      }}
    >
      <Row style={{ marginBottom: 100 }}>
        <Col md={8}>
          <h1 className="display-4">About CorTactics</h1>
          <p>
            Welcome to CorTactics. We are an experienced consulting team that
            delivers training and protocols designed to elevate your
            Cardiovascular CT program’s success. Cardiac CT image acquisition
            training cannot be taught with a one-size-fits-all philosophy.
            CorTactics approaches each individual site by assessing its current
            Cardiac CT team’s experience, equipment and staffing. We can then
            deliver a tailored approach to your team so it can achieve its
            primary objectives. Since 2004, our team has been performing Cardiac
            CT scans and honing our protocols and training techniques in order
            to consistently achieve the highest quality scans. Our tactical
            approach along with our protocols have been thoroughly tested, and
            we feel there is no obstacle we can’t overcome to obtain optimal
            results. Browse our site to learn more about what we offer, and
            don't hesitate to reach out with any questions, one of our team
            members would be happy to help.
          </p>
        </Col>
        <Col>
          <Image src={img1} fluid></Image>
        </Col>
      </Row>
      <Row style={{ marginBottom: 50 }}>
        <Col md={8}>
          <h1 className="display-4">About Our Team</h1>
          <p>
            We have 23 years of combined advanced Cardiovascular CT acquisition
            experience. We started performing Advanced Cardiac CT back in 2004.
            At that time, CT coronary angiography was a fairly new and emerging
            technology. We scanned a handful of patients per day using the
            Siemens Sensation 64 slice scanner. Capturing good images with the
            heart’s constant motion was a challenge. Over the years, the program
            has continued to grow as the technology also continued to improve.
            There has been so much learning and change over time as we have
            continued to strive for the best patient care while keeping up with
            the rapidly advancing technology. We are now completing well over
            7,000 cardiovascular exams a year, including peripheral, congenital
            and structural heart scans. We currently utilize the first second
            and third generation SIEMENS Dual Source scanners, and we are
            experienced with all other vendors including GE, Toshiba-Canon and
            Phillips. So we are confident that we can provide effective and
            productive solutions for your department’s needs.
          </p>
        </Col>
        <Col lg={3} style={{ marginTop: 50 }}>
          <Image src={DaveHeadshot} fluid></Image>
          <p style={{ textAlign: "center", fontSize: 12 }}>
            <ul
              className="list-unstyled"
              style={{
                fontSize: 12,
                textAlign: "center",
                color: "black"
              }}
            >
              <p>David Caye RT(R)CT</p>
              <p>
                <span aria-hidden="true"></span>
                <a href="tel:612-991-7118"> 612-991-7118</a>
              </p>
              <p>
                <span aria-hidden="true"></span>
                <a href="mailto:david.caye@cortactics.com">
                  David.Caye@cortactics.com
                </a>
              </p>
            </ul>
          </p>
        </Col>
      </Row>
      <Row style={{ marginBottom: 150 }}>
        <Col>
          <Image src={img3} fluid></Image>
        </Col>
        <Col>
          <Image src={img4} fluid></Image>
        </Col>
        <Col>
          <Image src={img5} fluid></Image>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
