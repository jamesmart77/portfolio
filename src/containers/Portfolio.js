import React, { Component } from 'react';
import { Col, Row } from 'react-materialize';
import ProjectCard from '../components/ProjectCard';
import Banner from '../components/Banner';
import Experience from '../components/Experience';
import * as projectData from '../helpers/projects.json';

class Portfolio extends Component {

  render() {
    return (
      <div className="portfolio-container">
          <Banner />
          <Experience />
          <Row>
            <Col s={10} offset='s1' className='center'>
              <h2 className='projects-header'>Projects</h2>
              <div className='divider' />
            </Col>
          </Row>
          <Row>
            { projectData.projects.map(project => {
              return (
                <ProjectCard 
                  key={project.id}
                  id={project.id}
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

export default Portfolio;
