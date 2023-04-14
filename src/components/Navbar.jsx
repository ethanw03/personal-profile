import React, { useState } from 'react';
import './Navbar.sass';

const Navbar = () => {
	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	return (
		<nav className='navbar'>
			<div className='leftContainer'>
				<label className='switch'>
					<input type='checkbox' checked={darkMode} onChange={toggleDarkMode} />
					<span className='slider'></span>
				</label>
			</div>
			<div className='rightContainer'>
				<a href='#'>About</a>
				<a href='#'>Projects</a>
				<a href='#'>Contact me</a>
			</div>
		</nav>
	);
};

export default Navbar;
