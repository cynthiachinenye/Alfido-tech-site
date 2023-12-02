import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary  ">
    <Container>
      <Navbar.Brand href="#home"><img src=".././Assets/Alfido.png" alt='logo' className='logo '/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav " className='ps-5'>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="internship" className='active text-warning'>Internship</Nav.Link>
          <Nav.Link href="#link">Workshop</Nav.Link>
          <Nav.Link href="#link">Submission</Nav.Link>
          <Nav.Link href="#link">Verify Certificate</Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
      
  
  )
}

export default NavBar
