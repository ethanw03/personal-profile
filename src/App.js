import React, { useState } from 'react';
import logo from './logo.svg';
import { Link, animateScroll as scroll } from 'react-scroll';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	return (
		<div className={darkMode ? 'App dark' : 'App'}>
			<Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			<Header darkMode={darkMode} />
			<About darkMode={darkMode} />
			<Skills darkMode={darkMode} />
			<Projects darkMode={darkMode} />
			<Contact darkMode={darkMode} />
		</div>
	);
}

export default App;
