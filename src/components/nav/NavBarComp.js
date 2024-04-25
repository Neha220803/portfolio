// import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../images/nlogo.png';
import './NavBarComp.css';

export const NavBar = () => {


    return (
        <Navbar bg="light" className="navcont fixed-top d-felx" expand="lg">
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

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;