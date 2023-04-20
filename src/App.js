import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/about';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import MobileNav from './components/MobileNav';

function App() {
	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	return (
		<div className={darkMode ? 'App dark' : 'App'}>
			<MobileNav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
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
