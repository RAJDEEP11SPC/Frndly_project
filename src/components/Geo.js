import React, { useState } from 'react';
//import Form from './Form';
import MyMapComponent from './MyMapComponent';

const Geo = () => {
	const [lat, setLat] = useState(null);
	const [lng, setLng] = useState(null);
	const [status, setStatus] = useState(null);

	const getLocation = () => {
		if (!navigator.geolocation) {
			setStatus('Geolocation is not supported by your browser');
		} else {
			setStatus('Locating...');
			navigator.geolocation.getCurrentPosition(
				(position) => {
					setStatus(null);
					setLat(position.coords.latitude);
					setLng(position.coords.longitude);
				},
				() => {
					setStatus('Unable to retrieve your location');
					console.log(status);
				},
			);
		}
	};

	return (
		<div>
			<button className='btn-geo' onClick={getLocation}>
				Get Location
			</button>

			{lat && lng && <MyMapComponent ab={lat} cd={lng} />}
		</div>
	);
};

export default Geo;
