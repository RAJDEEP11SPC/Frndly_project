import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const AboutUs = () => {
	return (
		<div>
			<div className='globalnav'>
			<Navbar />
			</div>
			
			<div className='abtus-about-section'>
				<div className='abtus-inner-container'>
					<h1 className='abtus-h1'>About US</h1>
					<p className='abtus-text'>
						Pet-Rescue is an animal welfare organisation with a
						vision of a future where every pet is safe, respected
						and loved. We help save thousands of lives every month
						by looking at the big picture, disrupting the status quo
						and helping animals find a forever home. We also
						advocate against animal cruelty and create a collective
						action under which we provide free programs and services
						to help millions of families discover the joy of
						adopting a new family member and help more than 1,000
						rescue organisations, shelters and pounds save the lives
						of thousands of rescue pets.
					</p>
					<div className='abtus-skills'>
						<div className='abtus-outer'>
							{/* <div className="abtus-button">
                                  <div className="abtus-text">Read More</div>
                              </div> */}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default AboutUs;
