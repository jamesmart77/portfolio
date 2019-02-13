import React, { Component } from "react";
import Loader from 'react-loader-spinner';
import { Row, Col } from 'react-materialize';
import Profile from '../images/profile.jpg';
import Family from '../images/family_photo.jpg';

export class LoadingSpinner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countDown: 3
        }
    }

    componentDidMount(){
        let counter = 3;
        let x = setInterval(() => {
            counter--;
            if(counter >0 ){
                this.setState({countDown: counter});
            } else {
                clearInterval(x);
                this.props.handleStopLoader();
            }
        }, 1000);
    }

    render(){
        return(
            <div className='loading-container center'>
                <Row>
                    <Col s={12}>
                        <Loader
                            type="Plane"
                            color="#db697a"
                            height="100"	
                            width="100"
                        />
                    </Col>

                    <Col s={12}>
                        <div className='loading-text'>
                            <h5>Beep...Boop...Beep</h5>
                            <h4>Lift off in: {this.state.countDown}</h4>
                        </div>
                        <div className='image' style={ {backgroundImage: `url(${Profile})`} } />
                        <div className='image' style={ {backgroundImage: `url(${Family})`} } />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default LoadingSpinner;
