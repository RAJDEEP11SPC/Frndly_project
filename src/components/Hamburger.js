import React from 'react';
import Login from './Login';
import Fb from './Fb'

const Harmburger = () => {
	return (
		<div className='hamburger-menu'>
			<input id='menu__toggle' type='checkbox' />
			<label className='menu__btn' htmlFor='menu__toggle'>
				<span></span>
			</label>

			<ul className='menu__box'>
				<li>
					<a className='menu__item' href='/Home'>
						Home
					</a>
				</li>
				<li>
					{/* <a className='menu__item' href='/Login'>
						Google Login
					</a> */}
					<Login />
					
				</li>
				<li>
					<a className='menu__item' href='/'>
						<Fb />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Harmburger;
