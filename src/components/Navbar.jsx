import React, { useState } from 'react';
import './Navbar.sass';
import {
	HideBetween,
	HideDuring,
	HideOn,
	HideScroll,
} from 'react-hide-on-scroll';

const Navbar = ({ darkMode, toggleDarkMode }) => {
	return (
		<nav className={darkMode ? 'navbar dark' : 'navbar'}>
			<HideBetween height startHeight={0} endHeight={620}>
				<div className='buttonContainer'>
					<button>About</button>
					<button>Skills</button>
					<button>Projects</button>
					<button>Contact</button>
				</div>
			</HideBetween>
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
