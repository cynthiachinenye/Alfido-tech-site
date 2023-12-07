import React from 'react'
import Container from 'react-bootstrap/esm/Container'

const Home = () => {
  return (
    <section className='block block-home'>
    <Container fluid>
    <div className='text-center m-5 content'>
    <p  className='fs-4 section-title'><span></span> contact us <span></span></p>
  
    <h1 className='text-dark'>Internship Program Details</h1>
    </div>
    <div>
    <div className=' text-secondary list'>
    <p></p>
    <ul className='  fs-6'>
    <li><strong>Duration: 1 Month</strong></li>
    <li><strong>Starting Date:</strong><strong className='text-danger'>  10 December 2023</strong></li>
    <li><strong>Submission Date:</strong><strong> 25 December To 10 January</strong></li>
    <li><strong>Mode:</strong><strong> Online & Task Based</strong></li>
    <li><strong>Perk:</strong><strong> Offer letter  & Completion Certification</strong></li>
    <li><strong>Domains:</strong><strong> 5+</strong></li>
    

    
    </ul>
    <hr className='horizon'/>
    <div>
    <p className='text-danger fw-100'>📌 Apply now and get offer letter within 24 Hours</p>
    <h2 className='text-dark fs-4 fw-700 ps-3'>📌 Join Alfido Tech Communities</h2>
    <ul>
    <li>LinkedIn:- <button className=' btn btn-outline-dark btn-light fs-5 rounded-pill'>Click Here</button></li>
    <li>Alfido Tech community:- <button className='btn btn-outline-dark btn-light fs-5 rounded-pill'>Click Here</button></li>
    <li>Alfido Tech:- <button className='btn btn-outline-dark btn-light fs-5 rounded-pill'>Click Here</button></li>
    <li>Telegram:- <button className='btn btn-outline-dark btn-light fs-5 rounded-pill'>Click Here</button></li>
    </ul>
    </div>
    <hr className='horizon'/>

    <h2 className='text-dark fs-4 fw-700 ps-3 w-100'>📌 Please carefully fill out all of the details that will be needed for the internship offer letter and internship certificate.
    If You Want a 4-month internship certificate, I will Give You some conditions.</h2>
    
    </div>
    </div>
    
    </Container>

      
    </section>
  )
}

export default Home
