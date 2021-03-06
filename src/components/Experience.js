import React from "react";
import { Row, Button, Col, Chip } from 'react-materialize';
import { Fade } from 'react-reveal';
import { experience } from '../helpers/experience';

export default function Experience() {
    return(
        <div className='experience-container'>
            <Row>
                <Row className='experience-container-row'>
                    <Col l={4} m={12} s={12} className='experience-container-row-col'>
                        <Fade left fraction={0.35}>
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
                        </Fade>
                    </Col>
                    <Col l={4} m={12} s={12} className='experience-container-row-col'>
                        <Fade left fraction={0.35}>
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
                        </Fade>
                    </Col>
                    <Col l={4} m={12} s={12} className='experience-container-row-col'>
                        <Fade right fraction={0.35}>
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
                        </Fade>
                    </Col>
                </Row>
                
                <Row className='center'>
                    <Button 
                        node='a' 
                        href='https://github.com/jamesmart77' 
                        className='external-btn'
                    >
                        Checkout My GitHub
                    </Button>
                </Row>
            </Row>
        </div>
    )
}
