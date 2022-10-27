import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
    {
      name: "Coding Quiz",
      description:
        "This Quiz Application is built with Html, Css and JavaScript. This quiz has 5 Question with 4 options and the maximum time given to answer those question is 75 seconds. ",
      image: "coding quiz challenge.png",
      technologies: ["HTML", "JavaScript", "Css"],
      github: "https://github.com/kamal392/Coding-Quiz.git",
      deployed: "https://kamal392.github.io/Coding-Quiz/",
    },
    {
      name: "Work Day",
      description:
        "This work-day-scheduler application can help users to keep track of hourly schedule . It has 3 colums , one for the time , Second for the task and third to save the task .",
      image: "work-day.png",
      technologies: ["Html", "Bootstrap", " Jquery"],
      github: "https://github.com/kamal392/work-day-scheduler.git",
      deployed: "https://kamal392.github.io/work-day-scheduler/",
    },
    {
      name: "Weather App",
      description:
        "This weather-app is useful to know the weather around the world. A user just needs to type the city name and it will not just show the forecast of the city for the current day but also for the next five days. ",
      image: "weather-app.png",
      technologies: ["HTML", "CSS", "Bootstrap"],
      github: "https://github.com/kamal392/weather-app.git",
      deployed: "https://kamal392.github.io/weather-app/",
    },
    {
      name: "Team Profile ",
      description:
        "This applications is about generating a team profile as per the designation of an employee . As user starts the application he or she will be provided with about their name. ",
      image: "team.png",
      technologies: [
        "Node.js",
        "HTML",
        "CSS",
        "Npm inquirer@8.2.4",
        "npm jest",
      ],
      github: "https://github.com/kamal392/Team-profile-generator.git",
      deployed:
        "https://drive.google.com/file/d/11dKnzK_Yigd9ToSrGaiiA__i3NKYaa2_/view",
    },
    {
      name: "Note Tracker",
      description:
        "This is a simple app that helps user to make notes. The user needs to click on + sign (which is on the right top) to add new task and click on the save to save the task",
      image: "note-taker-image.png",
      technologies: ["HTML", "CSS", "JavaScript", " Express.js"],
      github: "https://github.com/kamal392/Note-taker.git",
      deployed: "https://kamalnotetake.herokuapp.com/",
    },
    {
      name: "Food Lover ",
      description:
        "In this project, we decided to create a website where the user is able to read recipes without creating an account, but if they would like to add recipes of their own, they need to sign up.",
      image: "food.png",
      technologies: ["HTML/CSS", "JavaScript"],
      github: "https://github.com/scuratolo26/Food-Lovers.git",
      deployed: "https://food-lovers-project.herokuapp.com/",
    },
  ];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;
