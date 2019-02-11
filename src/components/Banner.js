import React, { Component } from "react";
import { Row, Button } from 'react-materialize';
import { Link } from 'react-router-dom';
import Profile from '../images/profile.jpg';

export class Banner extends Component {
   render(){
        return(
            <div className='banner-container'>
                <Row>
                    <div className='profile obj-fade-in valign-wrapper' style={ {backgroundImage: `url(${Profile})`} }>
                        <h3 className='profile-text'>
                            <a href='https://www.linkedin.com/in/jamesrmartineau' 
                                target='_blank'
                                rel="noopener noreferrer">Let's Connect</a>
                        </h3>
                    </div>
                    <Row className='btn-row center'>
                        <Button className='about-me-btn'>
                            <Link to='/aboutme'>About Me</Link>
                        </Button>
                    </Row>
                </Row>
            </div>
        )
    }
}

export default Banner;
