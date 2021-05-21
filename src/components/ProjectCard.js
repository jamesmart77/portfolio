import React from "react";
import { Col, Row } from 'react-materialize';
import Profile from '../images/profile.jpg';
import { Fade } from 'react-reveal';
import Button from "react-materialize/lib/Button";
import github from '../images/github.png';

export default function ProjectCard(props) {
        
    const { id, title, description, appLink, repoLink, imageLink } = props;

    return(
        <Fade left>
            <div key={`project-${id}`} className='project-card-container'>
                <Row>
                    <img className={`header-img  ${!imageLink ? 'add-radius' : ''}`} src={imageLink || Profile} alt={title} />
                </Row>
                <Row>
                    <Col s={12}>
                        <h5 className="title">{title}</h5>
                    </Col>
                    <Col s={12}>
                        <p className="description">{description}</p>
                    </Col>
                </Row>
                <Row className="link-row">
                    <a href={appLink} target='_blank' rel="noopener noreferrer">
                        <Button>View App</Button>
                    </a>
                    <a 
                        className="repo" 
                        href={repoLink} 
                        target='_blank' 
                        rel="noopener noreferrer"
                        title="Github repo"
                    >
                        <img src={github} alt="project github repository" />
                    </a>
                </Row>
            </div>
        </Fade>
    )
}

//{/* <Col s={10} l={5} offset='s1 l1'>
            //     <Card key={id} className='small'
            //         // header={<CardTitle reveal image={imageLink ? imageLink : Profile}>{title}</CardTitle>}
            //         header={<CardTitle reveal image={Profile}>{title}</CardTitle>}
            //         reveal={<Row>
            //                     <p>{description}</p>
            //                     <h5>Tech Stack</h5>
            //                     <div>
            //                         {techStack.map(tech => {
            //                             return (
            //                                     <Chip className='truncate'>
            //                                         {tech.img && <img src={tech.img} alt={tech.name} />}
            //                                         <Bounce>{tech.name}</Bounce>
            //                                     </Chip>
            //                             )
            //                         })}
            //                     </div>
            //                 </Row>
            //             }
            //         actions={[<a href={appLink} target='_blank' rel="noopener noreferrer">View App</a>, 
            //                     <a className='repo-link' href={repoLink} target='_blank' rel="noopener noreferrer">Repo</a>]}>
            //             <Fade left fraction={0.6}>
            //                 <div 
            //                     className='card-details activator'>
            //                         Tap for details
            //                 </div>
            //             </Fade>
            //     </Card>
            // </Col> */}