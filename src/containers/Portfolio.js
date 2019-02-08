import React, { Component } from 'react';
import { Col, Row } from 'react-materialize';
import ProjectCard from '../components/ProjectCard';
import Banner from '../components/Banner';
import * as projectData from '../helpers/projects.json';

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio-container">
          <Banner />
          <Row>
            <Col s={12} className='center'>
              <div className='portfolio-sub-text'>
                Full stack developer by day, passionate coder in life.
              </div>
            </Col>
          </Row>
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

export default Portfolio;
