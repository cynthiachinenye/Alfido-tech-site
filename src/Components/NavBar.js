import React from 'react'
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  return (
    <div className='container position-relative'>
    <nav className='navbar navbar-expand-lg navbar-light px-3-lg-5 py-3 py-lg-0'>
    <a className='navbar-brand' href='#'><img src=".././Assets/Alfido.png" alt='logo' className='logo '/></a>
    
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div className='collapse navbar-collapse ps-5 py-4' id='navbarsupportedContent '>
  <Nav className="me-auto">
             <Nav.Link href="#home">Home</Nav.Link>
             <Nav.Link href="internship" className='active'>Internship</Nav.Link>
             <Nav.Link href="#link">Workshop</Nav.Link>
           <Nav.Link href="#link">Submission</Nav.Link>
           <Nav.Link href="#link">Verify Certificate</Nav.Link>
           
       </Nav>
  
  </div>
    </nav>
      <div>
      <h1>Internship Registration</h1>
      </div>
    </div>
  )
}

export default NavBar






// import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Breadcrumb from 'react-bootstrap/Breadcrumb';


// const NavBar = () => {
//   return (
    
//     <Navbar expand="lg" className="bg-body-tertiary  position-fixed">
//     <Container>
//       <Navbar.Brand href="#home"><img src=".././Assets/Alfido.png" alt='logo' className='logo '/></Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav " className='ps-5'>
//         <Nav className="me-auto">
//           <Nav.Link href="#home">Home</Nav.Link>
//           <Nav.Link href="internship" className='active text-warning'>Internship</Nav.Link>
//           <Nav.Link href="#link">Workshop</Nav.Link>
//           <Nav.Link href="#link">Submission</Nav.Link>
//           <Nav.Link href="#link">Verify Certificate</Nav.Link>
         
//         </Nav>
//       </Navbar.Collapse>
//     </Container>
//   </Navbar>

      
  
//   )
// }

// export default NavBar
