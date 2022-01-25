import React from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import  Carousel  from 'react-bootstrap/Carousel';



function NewCards() {
  return <div >
    <section>
  <Carousel  interval={2000} variant="dark" style={{ backgroundImage: "url(./images/flowers.png)" }}>
        <Carousel.Item >
        <div className="carouselcard">
            <h2 >I am so happy to be associated with the community and help animals.It is indeed a pleasure for me .</h2>
         <em>User, India</em>
          </div>
      <MDBRow className='row-cols-1 row-cols-md-3 g-4 cardmargin'>
    <MDBCol>
      <MDBCard style={{ maxWidth: '50rem'}} style={{ backgroundImage: "url(./images/flowers.png)" }}>
      <MDBCardBody>
      <div class="ncards-list">
      <div className="ncard 1">
        <div className="ncard_image"> <img src="https://i.redd.it/b3esnz5ra34y.jpg" /> </div>
        <div className="ncard_title title-white">
          <p>Card Title</p>
        </div>
      </div>
      </div>
      </MDBCardBody>
        </MDBCard>
      </MDBCol>
      

      
    <MDBCol>
      <MDBCard style={{ maxWidth: '50rem'}} style={{ backgroundImage: "url(./images/flowers.png)" }}>
      <MDBCardBody>
      <div className="ncards-list">
      <div className="ncard 1">
        <div className="ncard_image"> <img src="https://i.redd.it/b3esnz5ra34y.jpg" /> </div>
        <div className="ncard_title title-white">
          <p>Card Title</p>
        </div>
      </div>
      </div>
      </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
      <MDBCard style={{ maxWidth: '50rem'}} style={{ backgroundImage: "url(./images/flowers.png)" }}>
      <MDBCardBody>
      <div className="ncards-list">
      <div className="ncard 1">
        <div className="ncard_image"> <img src="https://i.redd.it/b3esnz5ra34y.jpg" /> </div>
        <div className="ncard_title title-white">
          <p>Card Title</p>
        </div>
      </div>
      </div>
      </MDBCardBody>
        </MDBCard>
      </MDBCol>

      </MDBRow>

      </Carousel.Item>

      <Carousel.Item >

        <div className="carouselcard">
            <h2 >I am so happy to be associated with the community and help animals.It is indeed a pleasure for me .</h2>
         <em>User, India</em>
          </div>
      <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
    <MDBCol>
      <MDBCard style={{ maxWidth: '20rem'}} style={{ backgroundImage: "url(./images/flowers.png)" }}>
      <MDBCardBody>
      <div className="ncards-list">
      <div className="ncard 1">
        <div className="ncard_image"> <img src="https://i.redd.it/b3esnz5ra34y.jpg" /> </div>
        <div className="ncard_title title-white">
          <p>Card Title</p>
        </div>
      </div>
      </div>
      </MDBCardBody>
        </MDBCard>
      </MDBCol>
      
      <MDBCol>
      <MDBCard style={{ maxWidth: '50rem'}} style={{ backgroundImage: "url(./images/flowers.png)" }}>
      <MDBCardBody>
      <div className="ncards-list">
      <div className="ncard 1">
        <div className="ncard_image"> <img src="https://i.redd.it/b3esnz5ra34y.jpg" /> </div>
        <div className="ncard_title title-white">
          <p>Card Title</p>
        </div>
      </div>
      </div>
      </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
      <MDBCard style={{ maxWidth: '50rem'}} style={{ backgroundImage: "url(./images/flowers.png)" }}>
      <MDBCardBody>
      <div className="ncards-list">
      <div className="ncard 1">
        <div className="ncard_image"> <img src="https://i.redd.it/b3esnz5ra34y.jpg" /> </div>
        <div className="ncard_title title-white">
          <p>Card Title</p>
        </div>
      </div>
      </div>
      </MDBCardBody>
        </MDBCard>
      </MDBCol>
      </MDBRow>
      </Carousel.Item>

      <Carousel.Item >

        <div className="carouselcard">
            <h2 >I am so happy to be associated with the community and help animals.It is indeed a pleasure for me .</h2>
         <em>User, India</em>
          </div>
      <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
    <MDBCol>
      <MDBCard style={{ maxWidth: '20rem'}} style={{ backgroundImage: "url(./images/flowers.png)" }}>
      <MDBCardBody>
      <div className="ncards-list">
      <div className="ncard 1">
        <div className="ncard_image"> <img src="https://i.redd.it/b3esnz5ra34y.jpg" /> </div>
        <div className="ncard_title title-white">
          <p>Card Title</p>
        </div>
      </div>
      </div>
      </MDBCardBody>
        </MDBCard>
      </MDBCol>
      
      <MDBCol>
      <MDBCard style={{ maxWidth: '50rem'}} style={{ backgroundImage: "url(./images/flowers.png)" }}>
      <MDBCardBody>
      <div className="ncards-list">
      <div className="ncard 1">
        <div className="ncard_image"> <img src="https://i.redd.it/b3esnz5ra34y.jpg" /> </div>
        <div className="ncard_title title-white">
          <p>Card Title</p>
        </div>
      </div>
      </div>
      </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
      <MDBCard style={{ maxWidth: '50rem'}} style={{ backgroundImage: "url(./images/flowers.png)" }}>
      <MDBCardBody>
      <div className="ncards-list">
      <div className="ncard 1">
        <div className="ncard_image"> <img src="https://i.redd.it/b3esnz5ra34y.jpg" /> </div>
        <div className="ncard_title title-white">
          <p>Card Title</p>
        </div>
      </div>
      </div>
      </MDBCardBody>
        </MDBCard>
      </MDBCol>
      </MDBRow>
      </Carousel.Item>

      </Carousel>
      </section>
  </div>;
}

export default NewCards;



