import React from 'react';

function FrontAbout() {
	return(
	<div className='about'>
		<h1 className='aboutus-title'>About us</h1>
		<p>
			Pet-Rescue is an animal welfare organisation with a vision of a
			future where every pet is safe, respected and loved. We help save
			thousands of lives every month by looking at the big picture,
			disrupting the status quo and helping animals find a forever home.
		</p>

		<button className='btn'>
			<a href='/AboutUs'>Read More</a>
		</button>
	</div>
    )
}

export default FrontAbout;
