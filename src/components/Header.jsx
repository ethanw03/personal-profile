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
						<a>
							<button>Skills</button>
						</a>
						<a>
							<button>Projects</button>
						</a>
						<a>
							<button>Contact</button>
						</a>
					</div>
				</HideOn>
			</div>
		</div>
	);
}

export default Header;
