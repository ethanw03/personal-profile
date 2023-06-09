import React from 'react';
import './Header.sass';
import { HideOn } from 'react-hide-on-scroll';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';
import { FaAngleDoubleDown } from 'react-icons/fa';

function Header({ darkMode }) {
	return (
		<div className={darkMode ? 'headerPage dark' : 'headerPage'}>
			<div className='headerContent'>
				<h1>ETHAN</h1>
				<h1>NICHOLAS WONG</h1>
				<Typewriter
					options={{
						strings: [
							'Full-Stack Developer',
							'Creative',
							'Front-End Developer',
							'Back-End Developer',
						],
						autoStart: true,
						loop: true,
						delay: 30,
						wrapperClassName: 'typeWriterText',
						cursorClassName: 'typeWriterCursor',
						cursor: '',
					}}
				/>
				<HideOn height={875}>
					<div className='buttonContainer'>
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
				</HideOn>

				<div className='down'>
					<FaAngleDoubleDown />
				</div>
			</div>
		</div>
	);
}

export default Header;
