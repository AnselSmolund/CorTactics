import React from "react";
import "./NavComponent.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import MainLogo from "./main-logo-grey.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Home from "./Home";
import Footer from "./Footer";
import { FaLinkedin, FaFacebook, FaTwitter, FaPhone } from "react-icons/fa";

export const NavComponent = props => {
  return (
    <Router>
      <Navbar className="main-navbar" expand="lg" variant="light">
        <Navbar.Brand href="/">
          <Image src={MainLogo} width={150} roundedCircle></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/testimonials">Testimonials</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <div className="social-icons">
            <Nav.Link href="https://www.linkedin.com/in/david-caye-93053626/">
              <FaLinkedin
                className="social-icon"
                style={{ color: "white" }}
              ></FaLinkedin>
            </Nav.Link>
            <Nav.Link href="https://www.facebook.com/CorTactics/">
              <FaFacebook
                className="social-icon"
                style={{ color: "white" }}
              ></FaFacebook>
            </Nav.Link>
            <Nav.Link href="https://twitter.com/DavidCaye2">
              <FaTwitter
                className="social-icon"
                style={{ color: "white" }}
              ></FaTwitter>
            </Nav.Link>
            <Nav.Link href="tel:612-991-7118">
              612-991-7118
              <p style={{ fontSize: 12, color: "#ff3838" }}>
                {" "}
                Call now for a free consulation!{" "}
              </p>
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/testimonials">
          <Testimonials />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
};

export default NavComponent;
