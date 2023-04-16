import React from 'react';
import './About.sass';

function About({ darkMode }) {
	return (
		<div className='aboutPage'>
			<div className='aboutContent'>
				<h1>ABOUT</h1>
			</div>
			<div className='aboutText'>
				<p>
					Hello, I am a full-stack developer based out of British Columbia,
					Canada. <br />I have a passion for creating clean and functional web
					applications. My interests <br /> fall in learning new technologies
					and I am always looking for new challenges. <br />
				</p>
			</div>
		</div>
	);
}

export default About;
