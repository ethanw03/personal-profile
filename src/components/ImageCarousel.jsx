import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ImageCarousel.sass';
import { FaReact, FaNodeJs, FaDatabase, FaGem } from 'react-icons/fa';
import { DiCss3, DiHtml5 } from 'react-icons/di';
import {
	SiExpress,
	SiJavascript,
	SiAxios,
	SiStorybook,
	SiCypress,
	SiSass,
	SiRubyonrails,
	SiWebpack,
} from 'react-icons/si';

import schedulerPNG from '../assets/scheduler.png';
import betterPNG from '../assets/better.png';
import tweeterPNG from '../assets/tweeter.png';
import junglePNG from '../assets/Jungle.png';

const ImageCarousel = ({ darkMode }) => {
	const images = [
		{
			src: junglePNG,
			title: 'JUNGLE ',
			description:
				'A E-Commerce site for selling exotic flora. Uses Stripe for payments and has basic user authentication for admin roles. ',
			techStack: [<FaGem />, <SiRubyonrails />, <SiWebpack />, <SiSass />],
		},
		{
			src: betterPNG,
			title: 'BETTER',
			description:
				'An app built to assist users in building better habits! It takes in a users requested goals and daily check-ins to display data and give users feedback.',
			techStack: [
				<FaReact />,
				<FaNodeJs />,
				<DiCss3 />,
				<SiExpress />,
				<FaDatabase />,
			],
		},
		{
			src: tweeterPNG,
			title: 'TWEETER',
			description:
				'A single page twitter app clone. This app passes data to and from a database in order to dynamically display tweets posted.',
			techStack: [<SiJavascript />, <DiHtml5 />, <DiCss3 />, <SiExpress />],
		},
		{
			src: schedulerPNG,
			title: 'SCHEDULER',
			description:
				'This app dynamically books, edits, or deletes appointments within a set timeframe of 12pm - 5pm, Monday to Friday. Each appointment can select one mentor from the icon menu and input one student name. The app has built in error handling with alerts that an appointment has failed to delete or book.',
			techStack: [
				<FaReact />,
				<SiStorybook />,
				<SiCypress />,
				<SiAxios />,
				<FaDatabase />,
			],
		},
	];

	return (
		<div className={`carousel-wrapper ${darkMode ? 'dark-mode' : ''}`}>
			<Carousel
				showArrows={true}
				showStatus={false}
				showThumbs={false}
				showIndicators={true}
				infiniteLoop={true}
				className='custom-carousel'
				dynamicHeight>
				{images.map((image, index) => (
					<div key={index} className='carousel-slide'>
						<img src={image.src} alt={image.title} />
						<div className='overlay'>
							<div className='tech-icons'>
								{image.techStack.map((icon, idx) => (
									<span key={idx}>{icon}</span>
								))}
							</div>
							<p className='description'>{image.description}</p>
							<h3 className='title'>{image.title}</h3>
						</div>
					</div>
				))}
			</Carousel>
		</div>
	);
};

export default ImageCarousel;
