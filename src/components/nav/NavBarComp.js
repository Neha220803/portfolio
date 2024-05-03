import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../images/nlogo.png';
import './NavBarComp.css';
import { Download } from 'react-bootstrap-icons';

export const NavBar = () => {
    const [expanded, setExpanded] = useState(false);
    const closeNavbar = () => setExpanded(false);


    return (
        <Navbar className="navcont fixed-top" expand="lg" expanded={expanded}>
            <Container>
                <Navbar.Brand href="/" style={{ fontFamily: 'Inknut Antiqua' }}>
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{'   '}
                    - Portfolio
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#home" className='navpaths nav-text' onClick={closeNavbar}>Home</Nav.Link>
                        <Nav.Link href="#about" className='navpaths ' onClick={closeNavbar}>About</Nav.Link>
                        <Nav.Link href="#experience" className='navpaths' onClick={closeNavbar}>Experience</Nav.Link>
                        <Nav.Link href="#projects" className='navpaths' onClick={closeNavbar}>Projects</Nav.Link>
                        <Nav.Link href="#skills" className='navpaths' onClick={closeNavbar}>Skills</Nav.Link>
                        <Nav.Link href="#education" className='navpaths' onClick={closeNavbar}>Education</Nav.Link>
                        <Nav.Link href="#contact" className='navpaths' onClick={closeNavbar}>Contact Me</Nav.Link>
                    </Nav>
                    <span className='navbar-text'><a href='resume.pdf' download><button className="vvd px-3 py-2" onClick={closeNavbar}><span><Download className='me-2' />Resume</span></button></a></span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;