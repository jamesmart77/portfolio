import React, { Component } from 'react';
import { Container, Row } from 'react-materialize';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import ProjectCard from '../components/ProjectCard';
import * as projectData from '../helpers/projects.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Banner />

          <Row>
            { projectData.projects.map(project => {
              return (
                <ProjectCard 
                  title={project.title}
                  description={project.description}
                  appLink={project.appLink}
                  repoLink={project.repoLink}
                  techStack={project.techStack}
                />
              )
            })}
          </Row>

      </div>
    );
  }
}

export default App;
