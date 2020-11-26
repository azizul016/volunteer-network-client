import React, { useContext } from "react";
import { Col, Form, FormControl, Nav, Navbar, Row } from "react-bootstrap";
import "./Header.css";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import { Link, NavLink, useHistory } from "react-router-dom";
import logo from "../resources/logos/Group 1329.png";
import { UserContext } from "../../App";

const Header = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  let history = useHistory();
  const handleReg = () => {
    // console.log('clicked');
    history.replace("/addUsers");
  };

  const handleClick = () => {
    history.push("/");
    window.location.reload();
  };

  return (
    <Container>
      <Row>
        <Col md={12}>
          <Navbar bg="#f8f9fa94" expand="lg">
            <Navbar.Brand onClick={handleClick} className="logo">
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto align-items-center">
                <Link to="home">Home</Link>
                <Link to="donation">Donation</Link>
                <Link to="/totalActivities">Events</Link>
                <Link to="block">Blocks</Link>
              </Nav>
              {loggedInUser.email ? (
                ""
              ) : (
                <div className="py-3 pr-2" style={{ textAlign:"center" }} >
                  <Button variant="contained" color="primary">
                    {" "}
                    Register
                  </Button>
                </div>
              )}
              <div style={{ textAlign:"center" }} >
                <Button
                  onClick={handleReg}
                  variant="contained"
                  color="secondary"
                >
                  Admin
                </Button>
              </div>
              {loggedInUser.email ? (
                <p className="mt-2 ml-3">{loggedInUser.name}</p>
              ) : (
                ""
              )}
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;

// <Navbar bg="#f8f9fa94" variant="light" className="navbar">
// <Navbar.Brand onClick={handleClick} className="logo">
//     <Link to="/"><img src={logo} alt="Logo" /></Link>
// </Navbar.Brand>
// <Nav className="ml-auto nav">
//     <Link to="home">Home</Link>
//     <Link to="donation">Donation</Link>
//     <Link to="/totalActivities">Events</Link>
//     <Link to="block">Blocks</Link>
// </Nav>
// {loggedInUser.email ? "" : <Button variant="contained" color="primary"> Register</Button>}
// <Button onClick={handleReg} variant="contained" color="secondary"> Admin</Button>
// {
//     loggedInUser.email ? <p className="mt-2 ml-3">{loggedInUser.name}</p> : ""
// }
// </Navbar>
