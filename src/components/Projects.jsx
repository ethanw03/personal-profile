import React from 'react';
import './Projects.sass';
import ImageCarousel from './ImageCarousel';

function Projects(darkMode) {
	return (
		<div className={darkMode ? 'projectsPage dark' : 'projectsPage'}>
			<div className='projectsContent'>
				<h1>PROJECTS</h1>
			</div>
			<div className='imageCarousel'>
				<ImageCarousel />
			</div>
		</div>
	);
}

export default Projects;
