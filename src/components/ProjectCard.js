import React, { Component } from "react";
import { Card, CardTitle, Col, Chip, Row } from 'react-materialize';
import Profile from '../images/profile.jpg';
import { Fade, Bounce } from 'react-reveal';

export class ProjectCard extends Component {

    render() {
        
        const { id, title, description, techStack, appLink, repoLink } = this.props;
    
        return(
            <div className='project-card-container'>
                <Col s={10} l={5} offset='s1 l1'>
                    <Card key={id} className='small'
                        header={<CardTitle reveal image={Profile}>{title}</CardTitle>}
                        reveal={<Row>
                                    <p>{description}</p>
                                    <h5>Tech Stack</h5>
                                    <div>
                                        {techStack.map(tech => {
                                            return (
                                                    <Chip className='truncate'>
                                                        {tech.img && <img src={tech.img} alt='tech type' />}
                                                        <Bounce>{tech.name}</Bounce>
                                                    </Chip>
                                            )
                                        })}
                                    </div>
                                </Row>
                            }
                        actions={[<a href={appLink} target='_blank' rel="noopener noreferrer">View App</a>, 
                                    <a className='repo-link' href={repoLink} target='_blank' rel="noopener noreferrer">Repo</a>]}>
                            <Fade left fraction={0.6}>
                                <div 
                                    className='card-details activator'>
                                        Tap for details
                                </div>
                            </Fade>
                    </Card>
                </Col>
            </div>
        )
    }
}

export default ProjectCard;
