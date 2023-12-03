import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const NavBar = () => {
  return (
    <section className='block block-section'>
      <Navbar expand="lg" className="bg-body-tertiary position-fixed">

        <Container>
          <Navbar.Brand href="#home"><img src='../Assets/Alfido.png' alt="logo" style={{ width: 200, height: 50 }} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <div className='container ms-5 ps-5'>
              <Nav className="me-auto ms-5 ps-5 fs-5 ">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#" className='active'>Internship</Nav.Link>
                <Nav.Link href="#link">Workshop</Nav.Link>
                <Nav.Link href="#link">Submission</Nav.Link>
                <Nav.Link href="#link">Verify Certificate</Nav.Link>


              </Nav>
            </div>

          </Navbar.Collapse>
        </Container>
      </Navbar>
          <div className="row g-5 py-5 bg-primary ">
          <div className="col-12 text-center">
          
          <br/><br/><br/>
            <h1 className=" text-white animated slideInDown fs-1 pt-5">Internship Registration</h1>
            <hr className="bg-white mx-auto mt-0 text-white" style={{ width: 90}} />

          </div>
          </div>

          </section>
            )
}

            export default NavBar
