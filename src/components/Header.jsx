import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
function Header() {
  return (
    <div>
    <Navbar   style={{zIndex:'2',background:'linear-gradient(to right, black , #34393c 80%)'}} expand="lg" className="bg-black w-100 shadow-lg">
      <Container >
        <Navbar.Brand className='text-white fs-4 '  href="#">
            <span className='fw-bold text-white fs-1'>P</span>ORTFOLIO
          <i className="fa-brands fa-github mx-2 fs-2 text-white"></i>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='text-white' id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link style={{fontSize:'17px'}} className='text-white  fw-medium'  href="#home">Home</Nav.Link>
            <Nav.Link style={{fontSize:'17px'}} className='text-white  fw-medium' href="#about">About</Nav.Link>
            <Nav.Link style={{fontSize:'17px'}} className='text-white  fw-medium' href="#works">Works</Nav.Link>
            <Nav.Link style={{fontSize:'17px'}} className='text-white  fw-medium' href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header