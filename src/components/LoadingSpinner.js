import React, { useEffect, useState } from "react";
import Loader from 'react-loader-spinner';
import { Row, Col } from 'react-materialize';
import Profile from '../images/profile.jpg';
import Family from '../images/family_photo.jpg';
import WoodWorking from '../images/wood_working.jpg';
import Code from '../images/code.jpg';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function LoadingSpinner(props) {

    const [countDown, setCountDown] = useState(3);

    useEffect(() => {
        const x = setInterval(() => {
            setCountDown(countDown - 1);
            if(countDown === 1 ){
                clearInterval(x);
                props.handleStopLoader();
            }
        }, 1000);

        return () => clearInterval(x); // clear on unmount
    })
    
    return(
        <div className='loading-container center'>
            <Row>
                <Col s={12}>
                    <Loader
                        type="BallTriangle"
                        color="#db697a"
                        height="100"	
                        width="100"
                    />
                </Col>

                <Col s={12}>
                    <div className='loading-text'>
                        <h5>Beep...Boop...Beep</h5>
                        <h4>Loading in {countDown}</h4>
                    </div>
                    <div className='image' style={ {backgroundImage: `url(${Profile})`} } />
                    <div className='image' style={ {backgroundImage: `url(${WoodWorking})`} } />
                    <div className='image' style={ {backgroundImage: `url(${Code})`} } />
                    <div className='image' style={ {backgroundImage: `url(${Family})`} } />
                </Col>
            </Row>
        </div>
    )
}
