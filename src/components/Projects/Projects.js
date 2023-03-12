import React, { Component } from "react";
// import OneProject from "./oneProject"
import "./Projects.css";

class Projects extends Component {
  state = {
    projects: [
      {
        title: "To-Do App",
        description:
          "An application bult in both frond-end and back-end technologies and performs CRUD operations.",
        githubUrl: "https://github.com/Justinekipkoech/To-do-App",
        img: "./images/projects/to-do.png",
      },

      {
        title: "Weather-App",
        description:
          "An application that shows current weather of city upon search by name.",
        demoUrl: "https://thunderous-stardust-1e6c96.netlify.app/",
        githubUrl: "https://github.com/Justinekipkoech/WEATHER",
        img: "./images/projects/weather.png",
      },
    ],
  };
  render() {
    return (
      <main className="projects">
        <h1>My Projects</h1>
        <section className="projects-container"></section>
      </main>
    );
  }
}

export default Projects;
