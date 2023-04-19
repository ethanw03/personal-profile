import React from 'react';
import './Skills.sass';
import {
	FaReact,
	FaNodeJs,
	FaDatabase,
	FaGem,
	FaGithub,
	FaMocha,
	FaChai,
} from 'react-icons/fa';

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
	SiJest,
	SiJquery,
	SiBootstrap,
} from 'react-icons/si';

function Skills({ darkMode }) {
	return (
		<div className='skillsPage'>
			<div className='skillsContent'>
				<h1>SKILLS</h1>
			</div>
			<div className='iconNames'>
				<h3>Database/VC</h3>
				<h3>Testing</h3>
				<h3>Languages</h3>
				<h3>Frameworks </h3>
			</div>
			<div className='iconContainer'>
				<div className='languages'>
					<a>
						<p>
							<SiJavascript href='/' target='_blank' />
						</p>
					</a>
					<a>
						<p>
							<FaGem href='/' target='_blank' />
						</p>
					</a>
					<a>
						<p>
							<DiHtml5 href='/' target='_blank' />
						</p>
					</a>
					<a>
						<p>
							<DiCss3 href='/' target='_blank' />
						</p>
					</a>
				</div>
				<div className='testing '>
					<a>
						<p>
							<SiStorybook href='/' target='_blank' />
						</p>
					</a>
					<a>
						<p>
							<SiCypress href='/' target='_blank' />
						</p>
					</a>
					<a>
						<p>
							<SiJest href='/' target='_blank' />
						</p>
					</a>
				</div>
				<div className='frameworks'>
					<a>
						<p>
							<FaReact href='/' target='_blank' />
						</p>
					</a>
					<a>
						<p>
							<SiSass href='/' target='_blank' />
						</p>
					</a>
					<a>
						<p>
							<SiWebpack href='/' target='_blank' />
						</p>
					</a>
					<a>
						<p>
							<SiExpress href='/' target='_blank' />
						</p>
					</a>
					<a>
						<p>
							<FaNodeJs href='/' target='_blank' />
						</p>
					</a>
					<a>
						<p>
							<SiAxios href='/' target='_blank' />
						</p>
					</a>
					<a>
						<p>
							<SiRubyonrails href='/' target='_blank' />
						</p>
					</a>

					<a>
						<p>
							<SiJquery href='/' target='_blank' />
						</p>
					</a>
					<a>
						<p>
							<SiBootstrap href='/' target='_blank' />
						</p>
					</a>
				</div>
				<div className='databases'>
					<a>
						<p>
							<FaDatabase href='/' target='_blank' />
						</p>
					</a>
					<a>
						<p>
							<FaGithub href='/' target='_blank' />
						</p>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Skills;
