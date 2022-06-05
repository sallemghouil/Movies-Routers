import React from "react";
import {
  Container,
  Nav,
  Navbar,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Add from "../Add/Add";
import "./Navbar.css";

const NavbarAll = ({ NewMovie, FilterMovie, FilterMovieByRating }) => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#"></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/">
                
                <Button>Home</Button>
              </Link>
            </Nav>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Add NewMovie={NewMovie} />
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarAll;
