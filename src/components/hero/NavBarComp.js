import React, { useState } from 'react';
import { Navbar, Container, Nav, Button, Modal, Form } from 'react-bootstrap';
import { FaEnvelope } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';

export const NavBar = () => {
    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setLgShow(false);

    return (
        <Navbar bg="light" className="navcont fixed-top " expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    {/* <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{'   '} */}
                    Neha Portfolio
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/" className='navpaths'>Home</Nav.Link>
                        <Nav.Link href="/" className='navpaths'>About Us</Nav.Link>
                        <Nav.Link href="/" className='navpaths'>Programs</Nav.Link>
                        <Nav.Link href="/" className='navpaths'>Heroes</Nav.Link>
                        <Nav.Link href="/" className='navpaths'>Gallery</Nav.Link>
                        <Nav.Link href="#!" className='navpaths'>Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;