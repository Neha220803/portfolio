// import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Linkedin, Github, Envelope } from 'react-bootstrap-icons';
import './NavBarComp.css';

export const NavBar = () => {


    return (
        <Navbar bg="light" className="navcont fixed-top d-felx" expand="lg">
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
                        <Nav.Link href="#home" className='navpaths'>Home</Nav.Link>
                        {/* <Nav.Link href="#about" className='navpaths'>About Me</Nav.Link> */}
                        <Nav.Link href="#experience" className='navpaths'>Experience</Nav.Link>
                        <Nav.Link href="#projects" className='navpaths'>Projects</Nav.Link>
                        <Nav.Link href="#skills" className='navpaths'>Skills</Nav.Link>
                        <Nav.Link href="#education" className='navpaths'>Education</Nav.Link>
                        <Nav.Link href="#contact" className='navpaths'>Contact Me</Nav.Link>
                    </Nav>
                    <span>
                        <div className="links">
                            <a href="https://www.linkedin.com/in/neeharika-s/"><Linkedin className='icon' /></a>
                            <a href="https://github.com/Neha220803"><Github className='icon' /></a>
                            <a href="https://www.gmail.com"><Envelope className='icon' /></a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;