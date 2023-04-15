import React from 'react';
import './Header.sass';
import {
	HideBetween,
	HideDuring,
	HideOn,
	HideScroll,
} from 'react-hide-on-scroll';
import { Link } from 'react-scroll';

function Header({ darkMode }) {
	return (
		<div className={darkMode ? 'headerPage dark' : 'headerPage'}>
			<div className='headerContent'>
				<h1>ETHAN</h1>
				<h1>NICHOLAS WONG</h1>
				<h3>Full-Stack Software Developer</h3>
				<HideOn height={950}>
					<div className='buttonContainer'>
						<Link
							to='aboutPage'
							spy={true}
							smooth={true}
							offset={50}
							duration={500}>
							<button>About</button>
						</Link>
						<Link
							to='skillsPage'
							spy={true}
							smooth={true}
							offset={50}
							duration={500}>
							<button>Skills</button>
						</Link>
						<Link
							to='projectsPage'
							spy={true}
							smooth={true}
							offset={50}
							duration={500}>
							<button>Projects</button>
						</Link>
						<Link
							to='aboutPage'
							spy={true}
							smooth={true}
							offset={50}
							duration={500}>
							<button>Contact</button>
						</Link>
					</div>
				</HideOn>
			</div>
		</div>
	);
}

export default Header;
