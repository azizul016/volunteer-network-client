import React, { useContext } from 'react';
import { Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import logo from '../resources/logos/Group 1329.png'
import { UserContext } from '../../App';

const Header = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext)
    let history = useHistory();
    const handleReg = () => {
        console.log('clicked');
        history.replace("/addUsers")
    }



    return (
        <Container>
            <Navbar bg="light" variant="light" className="navbar">
                <Navbar.Brand className="logo">
                    <Link to="/"><img src={logo} alt="Logo" /></Link>
                </Navbar.Brand>
                <Nav className="ml-auto nav">
                    <Link to="home">Home</Link>
                    <Link to="donation">Donation</Link>
                    <Link to="/totalActivities">Events</Link>
                    <Link to="block">Blocks</Link>
                </Nav>
                {loggedInUser.email ? "" : <Button variant="contained" color="primary"> Register</Button>}
                <Button onClick={handleReg} variant="contained" color="secondary"> Admin</Button>
                {
                    loggedInUser.email ? <p className="mt-2 ml-3">{loggedInUser.name}</p> : ""
                }
            </Navbar>
        </Container>
    );
};

export default Header;