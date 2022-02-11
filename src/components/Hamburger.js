import React from 'react';
import Login from './Login';

const Harmburger = () => {
	return (
		<div class='hamburger-menu'>
			<input id='menu__toggle' type='checkbox' />
			<label class='menu__btn' for='menu__toggle'>
				<span></span>
			</label>

			<ul class='menu__box'>
				<li>
					<a class='menu__item' href='/Home'>
						Home
					</a>
				</li>
				<li>
					{/* <a class='menu__item' href='/Login'>
						Google Login
					</a> */}
					<Login />
					
				</li>
				<li>
					<a class='menu__item' href='#'>
						Facebook Login
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Harmburger;
