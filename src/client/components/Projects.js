import React, { Component } from "react";
import Project from "./Project"

const projectData = require('../assets/data/projects.js')

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];

function ProjectList(props) {
  const projects = props.projects;
  const projectItems = projects.map((project) =>
    <Project key={project.title} title={project.title} description={project.description} src={project.src}/>
  )
  return (
    <div id="projects">{projectItems}</div>
  );
}

class Projects extends Component {
  render() {
    return (
      <ProjectList projects={projectData} />
    );
  }
}

export default Projects;