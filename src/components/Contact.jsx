import React, { useState } from 'react';
import './Contact.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import Mail from './Mail';

function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		// Send formData to your backend or API
	};

	const handleMailClick = () => {
		// Trigger the animation for the send button
		const sendButton = document.querySelector('.button');
		sendButton.classList.add('sent');

		// Clear the form inputs
		setFormData({ name: '', email: '', message: '' });
	};

	return (
		<div className='contactPage'>
			<div className='contactContent'>
				<h1>CONTACT</h1>
			</div>
			<div className='container'>
				<div className='contact-info'>
					<p>
						<FontAwesomeIcon icon={faLinkedin} />
					</p>
					<p>
						<FontAwesomeIcon icon={faFile} />
					</p>
					<p>
						<FontAwesomeIcon icon={faGithub} />
					</p>
				</div>
				<div className='divider'></div>
				<form className='contact-form' onSubmit={handleSubmit}>
					<input
						type='text'
						name='name'
						placeholder='Name'
						value={formData.name}
						onChange={handleChange}
						required
					/>
					<input
						type='email'
						name='email'
						placeholder='Email'
						value={formData.email}
						onChange={handleChange}
						required
					/>
					<textarea
						name='message'
						placeholder='Leave me a message!'
						value={formData.message}
						onChange={handleChange}
						required></textarea>

					<div className='sendMail' onClick={handleMailClick}>
						<Mail />
					</div>
				</form>
			</div>
		</div>
	);
}

export default Contact;
