import React, { Component } from "react";
import { Row, Button, Col, Chip } from 'react-materialize';
import * as experience from '../helpers/experience.json';

export class Experience extends Component {
   render(){
        return(
            <div className='experience-container'>
                <Row>
                    <Row className='experience-container-row'>
                        <Col l={4} m={12} s={12} className='experience-container-row-col'>
                            <div className='exp-section'>
                                <h4 className='exp-section-header center truncate'>Front-End</h4>
                                <Row>
                                    <div className='exp-section-sub-header'>Experienced with modern frameworks, styling, testing and more!</div>
                                </Row>
                                <Row className='exp-section-sub-row'>
                                    {experience.frontEnd.map(item => {
                                        return (
                                            <Chip 
                                                key={item.name} 
                                                className='experience-chip truncate'>
                                                    {item.img && <img src={item.img} alt={item.name}/>}
                                                    {item.name}
                                            </Chip>
                                        )
                                    })}
                                </Row>
                            </div>
                        </Col>
                        <Col l={4} m={12} s={12} className='experience-container-row-col'>
                            <div className='exp-section'>
                                <h4 className='exp-section-header center truncate'>Back-End</h4>
                                <Row>
                                    <div className='exp-section-sub-header'>Multiple runtime environments, web frameworks, database design, and data protection.</div>
                                </Row>
                                <Row className='exp-section-sub-row'>
                                    {experience.backEnd.map(item => {
                                        return (
                                            <Chip 
                                                key={item.name} 
                                                className='experience-chip truncate'>
                                                    {item.img && <img src={item.img} alt={item.name}/>}
                                                    {item.name}
                                            </Chip>
                                        )
                                    })}
                                </Row>
                            </div>
                        </Col>
                        <Col l={4} m={12} s={12} className='experience-container-row-col'>
                            <div className='exp-section'>
                                <h4 className='exp-section-header center truncate'>Competencies</h4>
                                <Row>
                                    <div className='exp-section-sub-header'>From strong soft-skills to high technical aptitude, I provide a balanced development approach.</div>
                                </Row>
                                <Row className='exp-section-sub-row'>
                                    {experience.competencies.map(item => {
                                        return (
                                            <Chip key={item.name} 
                                                    className='experience-chip truncate'>{item.name}</Chip>
                                        )
                                    })}
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
