import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (

    <MDBFooter fluid className="footer-distributed" >
      <MDBContainer >
        <MDBRow>
          <MDBCol md="4">
          <div className="footer-left">

          <h3>Friendly<span>Project</span></h3>

            <p class="footer-links">
            <a href="#" className="link-1">Home</a>

            <a href="#">About</a>
  
            <a href="#">Faq</a>
  
            <a href="#">Contact</a>

            </p>
            
            <p class="footer-company-name">Organisation Name © 2015</p>

            </div>

          </MDBCol>
          <MDBCol md="4">
          <div className="footer-center">

            <div>
            
            <p><span>50/2</span> Naya Patty Road, Kolkata-700055</p>
            </div>

            <div>
            
            <p>+1.555.555.5555</p>
            </div>

            <div>
    
            <p><a href="mailto:support@company.com">support@company.com</a></p>
            </div>

        </div>
          </MDBCol>

          <MDBCol md="4">
          
          <div className="footer-right">

        <p className="footer-company-about">
        <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

<       div className="footer-icons">

        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaEnvelope /></a>

        </div>

        </div>

          </MDBCol>
        </MDBRow>
      </MDBContainer>
      
    </MDBFooter>
  )
};

export default Footer;
