import React from 'react'
import Container from 'react-bootstrap/esm/Container'

const Home = () => {
  return (
    <section className='block block-home'>
    <Container fluid>
    <div className='text-center m-5 content'>
    <p  className='fs-4 section-title'><span></span> contact us <span></span></p>
  
    <h1>Internship Program Details</h1>
    </div>
    <div>
    <div className='ms-5 ps-5 text-secondary'>
    <p></p>
    <ul className=' ms-5 ps-5 fs-5 list'>
    <li><strong>Duration: 1 Month</strong></li>
    <li><strong>Starting Date:</strong><strong className='text-danger'>  10 December 2023</strong></li>
    <li><strong>Submission Date:</strong><strong> 25 December To 10 January</strong></li>
    <li><strong>Mode:</strong><strong> Online & Task Based</strong></li>
    <li><strong>Perk:</strong><strong> Offer letter  & Completion Certification</strong></li>
    <li><strong>Domains:</strong><strong> 5+</strong></li>
    

    
    </ul>
    <hr/>
    
    </div>
    </div>
    
    </Container>

      
    </section>
  )
}

export default Home
