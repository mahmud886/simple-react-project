import React, { Component } from 'react';
import './App.css';
import Profile from './components/profile';
class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Hello World!</h1>
				<Profile />
			</div>
		);
	}
}

export default App;
