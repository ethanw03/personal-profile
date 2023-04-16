import React, { useState } from 'react';
import './Contact.sass';

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

	return (
		<div className='contactPage'>
			<div className='contactContent'>
				<h1>CONTACT</h1>
			</div>
			<div className='container'>
				<div className='contact-info'>
					<p>Ethan N. Wong</p>
					<p>ethanwong98@yahoo.ca</p>
					<p>LinkedIn</p>
					<p>Creddle</p>
					<p>Github</p>
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
						placeholder='Message'
						value={formData.message}
						onChange={handleChange}
						required></textarea>
					<button type='submit'>Submit</button>
				</form>
			</div>
		</div>
	);
}

export default Contact;
