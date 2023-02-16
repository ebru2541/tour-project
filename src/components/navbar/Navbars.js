import React from "react";
import Nav from "react-bootstrap/Nav";
import "./Navbars.css";

const Navbars = () => {
  return (
    <Nav
      variant="tabs"
      defaultActiveKey="/home"
      className="bg-dark pt-3 d-flex justify-content-center"
    >
      <Nav.Item>
        <Nav.Link eventKey="about" className="text-light">
          About Us
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="fourYou" className="text-light">
          Four You
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Services" className="text-light">
          Services
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="blog" className="text-light">
          Blog
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="vlog" className="text-light">
          Vlog
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="contact" className="text-light">
          Contact
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navbars;
