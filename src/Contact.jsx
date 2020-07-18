import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import img1 from "./images/scans/CardiacDonna.jpg";
import img2 from "./images/dave-headshot4.jpg";
import img3 from "./images/scans/lima.png";
import img4 from "./images/scans/stent.png";
import img5 from "./images/scans/TAVR 3.png";

export const Contact = props => {
  return (
    <>
      <Container style={{ textAlign: "center", marginTop: 40 }}>
        <h1 className="display-4"> Contact </h1>
        <p>Send us a message for a complimentary consultation today! </p>
      </Container>
      <Container>
        <Form
          id="contact"
          style={{ marginTop: 0 }}
          action="https://formspree.io/mbjzpekb"
          method="post"
        >
          <fieldset>
            <input
              placeholder="Your name"
              name="name"
              type="text"
              tabindex="1"
              required
              autofocus
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your Email Address"
              name="_replyto"
              type="email"
              tabindex="2"
              required
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Phone number (Optional)"
              name="telephone"
              type="tel"
              tabindex="2"
            />
          </fieldset>
          <fieldset>
            <input
              type="text"
              name="_subject"
              placeholder="Type your subject here...."
              tabindex="1"
              required
            />
          </fieldset>
          <fieldset>
            <textarea
              id="myText"
              name="message"
              placeholder="Type your message here...."
              tabindex="5"
              required
            />
          </fieldset>
          <fieldset>
            <Button
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
            >
              Submit
            </Button>
          </fieldset>
        </Form>
      </Container>
    </>
  );
};

export default Contact;
