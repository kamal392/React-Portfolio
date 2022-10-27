import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('../../assets/images/recent-photo.jpg')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
					I am a full stack web developer looking to build a more
					intuitive user experience on the web. I am pursing web
					development course from University of Miami Bootcamp.
					with newly developed skills in JavaScript, CSS, React.js, 
					and responsive web design. I am known as an innovative problem
					 solver passionate about developing apps, with a focus on
					mobile-first design and development. With each project,
					my aim is to best engage my audience for an impactful
					user experience.
				</p>
				
			</div>
		</section>
	);
}

export default About;
