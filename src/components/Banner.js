import React from "react";
import { Row, Button } from 'react-materialize';
import { Link } from 'react-router-dom';
import Profile from '../images/profile.jpg';
import { Slide } from 'react-reveal';

export default function Banner(){
    return(
        <div className='banner-container'>
            <Row>
                <Slide duraction={5500} cascade top>
                    <div className='profile valign-wrapper' style={ {backgroundImage: `url(${Profile})`} }>
                        <h3 className='profile-text'>
                            <a href='https://www.linkedin.com/in/jamesrmartineau' 
                                target='_blank'
                                rel="noopener noreferrer">Let's Connect</a>
                        </h3>
                    </div>
                </Slide>
                <Row className='btn-row center'>
                    <Button className='about-me-btn'>
                        <Link to='/aboutme'>About Me</Link>
                    </Button>
                </Row>
            </Row>
        </div>
    )
}
