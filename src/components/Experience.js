import React, { Component } from "react";
import { Row, Button, Col } from 'react-materialize';
import { Link } from 'react-router-dom';
import Profile from '../images/profile.jpg';

export class Experience extends Component {
   render(){
        return(
            <div className='experience-container'>
                <Row>
                    <Row>
                        <Col s={12}>
                            <h3 className='center'>Experience</h3>
                        </Col>
                    </Row>
                    <Row className='experience-container-row'>
                        <Col l={4} s={12} className='experience-container-row-col'>
                            <div className='exp-section'>
                                <h4 className='center'>Front-End</h4>
                                <Row>
                                    <div className='tech-row-even'>React</div>
                                    <div className='tech-row-even'>Redux</div>
                                    <div className='tech-row-even'>HTML5</div>
                                    <div className='tech-row-even'>CSS3</div>
                                    <div className='tech-row-even'>ES6 JS</div>
                                </Row>
                                <Row>
                                    <h5 className='center'>IDEs</h5>
                                    <div className='tech-row-odd'>Visual Studio Code</div>
                                    <div className='tech-row-odd'>Intellij</div>
                                </Row>
                                <Row>
                                    <h5 className='center'>Testing</h5>
                                    <div className='tech-row-even'>Jest</div>
                                    <div className='tech-row-even'>Enzyme</div>
                                    <div className='tech-row-even'>Mocha</div>
                                    <div className='tech-row-even'>Chai</div>
                                    <div className='tech-row-even'>Test Cafe</div>
                                </Row>
                                <Row>
                                    <h5 className='center'>Other</h5>
                                    <div className='tech-row-odd'>Bootstrap</div>
                                    <div className='tech-row-odd'>Materialize</div>
                                    <div className='tech-row-odd'>SCSS</div>
                                    <div className='tech-row-odd'>BitBucket</div>
                                </Row>
                            </div>
                        </Col>
                        <Col l={4} s={12} className='experience-container-row-col'>
                            <div className='exp-section'>
                                <h4>Back-End</h4>
                                <Row>
                                    <div className='tech-row-odd'>Node.JS</div>
                                    <div className='tech-row-odd'>SpringBoot</div>
                                    <div className='tech-row-odd'>Express</div>
                                </Row>
                                <Row>
                                    <h5 className='center'>Database</h5>
                                    <div className='tech-row-even'>Postgres</div>
                                    <div className='tech-row-even'>MySQL</div>
                                    <div className='tech-row-even'>NoSQL</div>
                                    <div className='tech-row-even'>Firebase</div>
                                    <div className='tech-row-even'>Mongo</div>
                                    <div className='tech-row-even'>Sequelize</div>
                                    <div className='tech-row-even'>Mongoose</div>
                                    <div className='tech-row-even'>JPA</div>
                                </Row>
                                <Row>
                                    <h5 className='center'>Testing</h5>
                                    <div className='tech-row-odd'>Junit</div>
                                    <div className='tech-row-odd'>Jest / Enzyme</div>
                                </Row>
                                <Row>
                                    <h5 className='center'>Other</h5>
                                    <div className='tech-row-even'>Handlebars</div>
                                    <div className='tech-row-even'>Authentication</div>
                                    <div className='tech-row-even'>APIs</div>
                                </Row>
                            </div>
                        </Col>
                        <Col l={4} s={12} className='experience-container-row-col'>
                            <div className='exp-section'>
                                <h4 className='truncate'>Competencies</h4>
                                <Row>
                                    <div className='tech-row-even truncate'>Problem-solving</div>
                                    <div className='tech-row-even truncate'>Debugging</div>
                                    <div className='tech-row-even truncate'>Performance Optimization</div>
                                    <div className='tech-row-even truncate'>Code Review Capability</div>
                                    <div className='tech-row-even truncate'>System Design</div>
                                    <div className='tech-row-even truncate'>Testing</div>
                                    <div className='tech-row-even truncate'>Frameworks Proficiency</div>
                                    <div className='tech-row-even truncate'>Database Design</div>
                                    <div className='tech-row-even truncate'>Codebase Navigation</div>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    
                    <Row className='center'>
                        <Button>Checkout My GitHub</Button>
                    </Row>
                </Row>
            </div>
        )
    }
}

export default Experience;
