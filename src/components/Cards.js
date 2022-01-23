import React from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';

const Cards = () => {
  return (
    <div className='card-bg ' style={{ backgroundImage: "url(./images/flowers.png)" }}> 
      <div className='card-details'>
      <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
      <MDBCol>
        <MDBCard style={{ maxWidth: '30rem'}}>
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/nature/111.webp'
            alt='...'
            position='top'
            fluid alt='...' 
          />
          <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
        </MDBRipple>
          <MDBCardBody >
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
            <MDBBtn className='card-btn' href='#'>View More</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard style={{ maxWidth: '30rem' }}>
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
            
          <MDBCardImage 
            src='https://mdbootstrap.com/img/new/standard/nature/111.webp'
            alt='...'
            position='top'
            fluid alt='...' 
            className='d-block'
          />
          <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
        </MDBRipple>
          <MDBCardBody>
          
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
            <MDBBtn className='card-btn' href='#'>View More</MDBBtn>
          </MDBCardBody>
        </MDBCard>
        </MDBCol>
      </MDBRow>

      
     </div>
        
 
      </div>
    

     
  )
};

export default Cards;
