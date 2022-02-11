import React from 'react';
import Features from './Features';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Headcards from './Headcards';
import Abtcard from './Abtcard';
import Nav from './Nav';
import FrontAbout from './FrontAbout';
import Login from './Login';
import Faq from './Faq';


function Home() {
	return (
		<div className='app-details'>
			<Nav />
			<Headcards />
			<Features />
			<FrontAbout />
			<Abtcard />
			<Faq />
			<Footer />
			{/* <Fb /> */}
			{/* <div className='g-signin'>
				<Login />
			</div> */}
		</div>
	);
}

export default Home;
