import React, { Component } from "react";
import { Row } from 'react-materialize';
import Profile from '../../src/profile.jpg';

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
                    
                </Row>
            </div>
        )
    }
}

export default Banner;
