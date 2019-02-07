import React, { Component } from "react";
import { Card, CardTitle, Col, Row, Tag } from 'react-materialize';
import Profile from '../../src/profile.jpg';

export class ProjectCard extends Component {

    render() {
        
        const { title, description, techStack, appLink, repoLink} = this.props;
    
        return(
            <div className='project-card-container'>
                <Col s={10} l={3} offset='s1 m1 l1'>
                    <Card className='small'
                        header={<CardTitle reveal image={Profile}>{title}</CardTitle>}
                        reveal={<div>
                                    <h5>Project Description</h5>
                                    <p>{description}</p>
                                    <h5>Tech Stack</h5>
                                    {techStack.map(tech => {
                                        return (
                                            <Tag close={false}>{tech}</Tag>
                                        )
                                    })}
                                </div>}>
                            <Row className='valign-wrapper'>
                                <Col s={6}>
                                    <h5><a href={appLink}>View Me</a></h5>
                                </Col>
                                <Col s={6}>
                                    <h6 className='repo-link right'><a href={repoLink}>Checkout Repo</a></h6>
                                </Col>
                            </Row>
                    </Card>
                </Col>
            </div>
        )
    }
}

export default ProjectCard;
