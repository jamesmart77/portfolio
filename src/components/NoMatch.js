import React from "react";
import { Row } from 'react-materialize';
import Hangman from '../images/hangman.gif';

export default function NoMatch() {
    return(
        <div className='no-match-container'>
            <Row>
                <div className='center'>
                    <h3 >Sorry friend, this route does not exist.</h3>
                    <p>Enjoy the show until you figure out where you're trying to go :)</p>
                    <div>
                        <img src={Hangman} alt='dancing hangman' />
                    </div>
                </div>
                
            </Row>
        </div>
    )
}
