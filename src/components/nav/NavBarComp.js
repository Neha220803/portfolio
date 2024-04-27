// import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../images/nlogo.png';
import './NavBarComp.css';
import { Download } from 'react-bootstrap-icons';

export const NavBar = () => {


    return (
        <Navbar className="navcont fixed-top" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{'   '}
                    - Portfolio
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#home" className='navpaths nav-text'>Home</Nav.Link>
                        <Nav.Link href="#about" className='navpaths'>About</Nav.Link>
                        <Nav.Link href="#experience" className='navpaths'>Experience</Nav.Link>
                        <Nav.Link href="#projects" className='navpaths'>Projects</Nav.Link>
                        <Nav.Link href="#skills" className='navpaths'>Skills</Nav.Link>
                        <Nav.Link href="#education" className='navpaths'>Education</Nav.Link>
                        <Nav.Link href="#contact" className='navpaths'>Contact Me</Nav.Link>
                    </Nav>
                    <span className='navbar-text'><a href='resume.pdf' download><button className="vvd px-3 py-2"><span><Download className='me-2' />Resume</span></button></a></span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;