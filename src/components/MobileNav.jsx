import React, { useState } from 'react';
import './Navbar.sass';
import {
	HideBetween,
	HideDuring,
	HideOn,
	HideScroll,
} from 'react-hide-on-scroll';
import { Link } from 'react-scroll';

const Navbar = ({ darkMode, toggleDarkMode }) => {
	return (
		<nav className={darkMode ? 'navbar dark' : 'navbar'}>
			<HideBetween height startHeight={0} endHeight={825}>
				<div className='buttonContainer'>
					<Link
						to='headerPage'
						spy={true}
						smooth={true}
						offset={0}
						duration={500}>
						<button>Home</button>
					</Link>
					<Link
						to='aboutPage'
						spy={true}
						smooth={true}
						offset={0}
						duration={500}>
						<button>About</button>
					</Link>
					<Link
						to='skillsPage'
						spy={true}
						smooth={true}
						offset={0}
						duration={500}>
						<button>Skills</button>
					</Link>
					<Link
						to='projectsPage'
						spy={true}
						smooth={true}
						offset={0}
						duration={500}>
						<button>Projects</button>
					</Link>
					<Link
						to='contactPage'
						spy={true}
						smooth={true}
						offset={0}
						duration={500}>
						<button>Contact</button>
					</Link>
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
