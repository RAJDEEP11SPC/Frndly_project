import React from 'react';
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <button><a href="/Form">{text}</a></button>;

const MyMapComponent = ({ab , cd}) => {
	// const lat1 = abc.lat;
	// const lng1 = abc.lng;

	


	const defaultProps = {
		center: {
			lat: ab,
			lng: cd
		},
		zoom: 11,
	};

	return (
		// Important! Always set the container height explicitly
		<div style={{ height: '100vh', width: '100%' }}>
			<GoogleMapReact
				bootstrapURLKeys={{
					key: 'AIzaSyDSHxebGO5U_YjYrpqfH3e8DxcqTPWEMI8',
				}}
				defaultCenter={defaultProps.center}
				defaultZoom={defaultProps.zoom}>
				<AnyReactComponent lat={ab} lng={cd} text='My Marker ↓' />
				
			</GoogleMapReact>
		</div>
	);
};
export default MyMapComponent;