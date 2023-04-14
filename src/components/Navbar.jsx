import React, { useState } from 'react';
import './Navbar.sass';

const Navbar = ({ darkMode, toggleDarkMode }) => {
	return (
		<nav className={darkMode ? 'navbar dark' : 'navbar'}>
			<div className='leftContainer'>
				<label className='switch'>
					<input type='checkbox' checked={darkMode} onChange={toggleDarkMode} />
					<span className='slider'></span>
				</label>
			</div>
			<div class='centerContainer'></div>
		</nav>
	);
};

export default Navbar;
