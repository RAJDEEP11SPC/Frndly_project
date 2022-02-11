import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import { FaCheckSquare } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";


const Features = () => {
  return (
    <section className='featurescs' >
        <MDBContainer>

        <MDBRow> 
    
    

      
      <MDBCol md="4" className='feature-box '>
        
          <FaCheckSquare size={50} className='icon c3'/>
          <h3 className='feature-title f3 '>Easy to use.</h3>
          <p >So easy to use, even your dog could do it.</p>
        
        </MDBCol>
        <MDBCol md="4" className='feature-box'>

        
          <FaHandshake size={60} className='icon c2'/>
          <h3 className='feature-title f2' >Elite Clientele</h3>
          <p className='p2'>We have all the dogs, the greatest dogs.</p>
        
        </MDBCol>
        <MDBCol md="4" className='feature-box'>

        
        <FaRegHeart size={55} className='icon c1'/>
          <h3 className='feature-title f1'>Guaranteed to work.</h3>
          <p className='p1'>Find the love for your dog's life and enjoy.</p>
        
        </MDBCol>
      
      
      


   
    </MDBRow>

    </MDBContainer>
  </section>


  );
}

export default Features;
