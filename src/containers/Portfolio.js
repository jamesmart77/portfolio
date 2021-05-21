import React, { Component } from 'react';
import { Col, Row, Button } from 'react-materialize';
import ProjectCard from '../components/ProjectCard';
import Banner from '../components/Banner';
import Experience from '../components/Experience';
import { projects } from '../helpers/projects.js';
import AppFooter from '../components/AppFooter';

export default function Portfolio() {
  return (
    <div className="portfolio-container">
        <Banner />
        <Experience />
        <Row>
          <Col s={10} offset='s1' className='center'>
            <h2 className='projects-header'>Personal Projects</h2>
            <div className='divider' />
          </Col>
        </Row>
        <div className="projects-row">
          { projects.map(project => {
            return (
              <ProjectCard 
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                appLink={project.appLink}
                repoLink={project.repoLink}
                techStack={project.techStack}
                imageLink={project.imageLink}
              />
            )
          })}
        </div>
        <Row className='center'>
            <Button 
              node='a' 
              href='https://github.com/jamesmart77/resume' 
              className='external-btn'
            >
              Checkout my Resume
            </Button>
        </Row>
        <AppFooter />
    </div>
  );
}
