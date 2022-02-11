import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import AboutUs from './components/AboutUs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Nav from './components/Nav';
import Form from './components/Form';
import Geo from './components/Geo';
import Login from './components/Login';
import Services from './components/Services';
import Helpline from './components/Helpline';

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path='/AboutU' element={<AboutUs />} />
			</Routes>
			<Routes>
				<Route exact path='/AboutUs' element={<AboutUs />} />
				<Route exact path='/' element={<Home />} />
			</Routes>
			<Routes>
				<Route exact path='/Services' element={<Services />} />
			</Routes>
			<Routes>
				<Route exact path='/Helpline' element={<Helpline />} />
			</Routes>
			<Routes>
				<Route exact path='/For' element={<Form />} />
			</Routes>
			<Routes>
				<Route exact path='/Geo' element={<Geo />} />
			</Routes>
			<Routes>
				<Route exact path='/Home' element={<Home />} />
			</Routes>
			<Routes>
				<Route exact path='/Form' element={<Form />} />
			</Routes>
		</Router>
	);
}

export default App;
