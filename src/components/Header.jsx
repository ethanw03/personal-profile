import React from 'react';
import './Header.sass';

function Header({ darkMode }) {
	return (
		<div className={darkMode ? 'headerPage dark' : 'headerPage'}>
			<div className='headerContent'>
				<h1>ETHAN</h1>
				<h1>NICHOLAS WONG</h1>
				<h3>Full-Stack Software Developer</h3>
				<div className='buttonContainer'>
					<button>About</button>
					<button>Projects</button>
					<button>Contact me</button>
				</div>
			</div>
		</div>
	);
}

export default Header;
