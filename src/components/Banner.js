import React, { Component } from "react";
import { Row, Button } from 'react-materialize';
import Profile from '../images/profile.jpg';

export class Banner extends Component {
   render(){
        return(
            <div className='banner-container'>
                <Row>
                    <div className='profile valign-wrapper' style={ {backgroundImage: `url(${Profile})`} }>
                        <h3 className='profile-text'>
                            <a href='https://www.linkedin.com/in/jamesrmartineau' 
                                target='_blank'
                                rel="noopener noreferrer">Let's Connect</a>
                        </h3>
                    </div>
                    <Row className='center'>
                        <Button className='about-me-btn' node='a' href='/aboutme'>About Me</Button>
                    </Row>
                </Row>
            </div>
        )
    }
}

export default Banner;
