import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
export default function TopBar() {
    return (
        <div >
            <Navbar bg="dark" fixed="top" data-bs-theme="dark" collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Gayatri Sambare</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" >
                        <Nav style={{ gap: 20 }}>
                            <Nav.Link className='text-white' href="#home">Home</Nav.Link>
                            <Nav.Link className='text-white' href="#resume">
                                Resume
                            </Nav.Link>
                            <Nav.Link className='text-white' href="#projects">Projects</Nav.Link>
                            <Nav.Link className='text-white' href="#certification">Certification</Nav.Link>
                            <Nav.Link className='text-white' href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
