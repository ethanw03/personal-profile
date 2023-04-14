import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	return (
		<div className={darkMode ? 'App dark' : 'App'}>
			<Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			<Header darkMode={darkMode} />
		</div>
	);
}

export default App;
