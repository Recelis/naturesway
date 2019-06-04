import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

const NWWTNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand><Link to="/">Nature's Way Water Technologies</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link><Link to="/">Home</Link></Nav.Link>
          <Nav.Link><Link to="/healthandnutrition/">Health and Nutrition</Link></Nav.Link>
          <Nav.Link><Link to="/units/">Units</Link></Nav.Link>
          <Nav.Link><Link to="/collaboration/">Collaboration</Link></Nav.Link>
          <Nav.Link><Link to="/ourteam/">Our Team</Link></Nav.Link>
          <Nav.Link><Link to="/contact/">Contact</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NWWTNavbar;