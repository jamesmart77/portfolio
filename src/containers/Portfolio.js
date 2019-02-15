import React, { Component } from 'react';
import { Col, Row, Footer, Button } from 'react-materialize';
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
          <Footer copyrights="&copy; 2019 Copyright James Martineau"
          moreLinks={
            <div className='valign-wrapper'>
              <a className="grey-text text-lighten-4 right" href="https://github.com/jamesmart77">GitHub</a>
              <a className="grey-text text-lighten-4 right" href="https://www.linkedin.com/in/jamesrmartineau">LinkedIn</a>
            </div>
          }
        >
            <h5 className="white-text">Additional Information</h5>
            <Row>
              <Button className='footer-email-btn'
                      floating 
                      tooltip='Feel free to contact me via email'
                      node='a' 
                      href="mailto:jamesmart77@gmail.com" 
                      waves='light' 
                      icon='email'/>
            </Row>
        </Footer>
      </div>
    );
  }
}

export default Portfolio;
