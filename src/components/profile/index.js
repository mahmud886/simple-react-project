import React, { Component } from 'react';
import './profile.style.css';
class Profile extends Component {
	render() {
		return (
			<div className="container">
				<div className="bio">
					<h3>Snigdho</h3>
					<p>Web Application Developer</p>
				</div>
				<div className="skills">
					<h3>Skills</h3>
					<ul>
						<li>
							<a href="#">JavaScript</a>
						</li>
						<li>
							<a href="#">Java</a>
						</li>
						<li>
							<a href="#">Python</a>
						</li>
					</ul>
				</div>
				<div className="links">
					<h3>Social Links</h3>
					<ul>
						<li>
							<a href="#">Facebook</a>
						</li>
						<li>
							<a href="#">Twitter</a>
						</li>
						<li>
							<a href="#">Github</a>
						</li>
						<li>
							<a href="#">LinkedIn</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Profile;
