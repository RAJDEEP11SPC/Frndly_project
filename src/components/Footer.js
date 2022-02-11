import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

const Footer = () => {
	return (
		<MDBFooter fluid className='footer-distributed'>
			<MDBContainer>
				<MDBRow>
					<MDBCol md='4'>
						<div className='footer-left'>
							<h3>
								Friendly<span>Project</span>
							</h3>

							<p class='footer-links'>
								<a href='/Home' className='link-1'>
									Home
								</a>

								<a href='/AboutUs'>About Us</a>

								<a href='/Services'>Services</a>

								<a href='/Helpline'>Helpline</a>

								<a href='/Form'>Register</a>
							</p>

							<p class='footer-company-name'>
								Organisation Name © 2022
							</p>
						</div>
					</MDBCol>
					<MDBCol md='4'>
						<div className='footer-center'>
							<div>
								<p>35/I Middle Road, Kolkata-700075</p>
							</div>

							<div>
								<p>9051319246</p>
							</div>

							<div>
								<p>
									<a href='mailto:xyzrajdeep@gmail.com'>
										xyzrajdeep@gmail.com
									</a>
								</p>
							</div>
						</div>
					</MDBCol>

					<MDBCol md='4'>
						<div className='footer-right'>
							<p className='footer-company-about'>
								<span>About the company</span>
								Pet-Rescue is an animal welfare organisation
								with a vision of a future where every pet is
								safe, respected and loved. We help save
								thousands of lives every month by looking at the
								big picture, disrupting the status quo and
								helping animals find a forever home.
							</p>

							<div className='footer-icons'>
								<a href='#'>
									<FaFacebookF />
								</a>
								<a href='#'>
									<FaTwitter />
								</a>
								<a href='#'>
									<FaInstagram />
								</a>
								<a href='#'>
									<FaEnvelope />
								</a>
							</div>
						</div>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</MDBFooter>
	);
};

export default Footer;
