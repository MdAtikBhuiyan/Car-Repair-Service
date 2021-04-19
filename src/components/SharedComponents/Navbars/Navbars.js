import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import logo from '../../../images/header-logo.png';
import './Navbars.css';

const Navbars = () => {

    return (

        <Navbar expand="lg">
            <Container>
                <Navbar.Brand as={Link} to='/'>
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to='/home' className='nav-link'> Home </Link>
                        <Link to='/services' className='nav-link'> Services </Link>
                        <Link to='/reviews' className='nav-link'> Reviews </Link>
                        <Link to='/dashBoard' className='nav-link'> DashBoard </Link>
                        <Link to='/teams' className='nav-link'> Our Team </Link>
                        <Link to='/contact' className='nav-link'> Contact US </Link>
                        <Link to='/login' className='nav-link'> Login </Link>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Navbars;