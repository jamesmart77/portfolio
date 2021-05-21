import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Navbar, NavItem, Row } from 'react-materialize';

export class Nav extends Component {
   render(){
        return(
            <Row>
                <Navbar className='truncate' brand='James Martineau' right>
                    <div>
                        <li>
                            <Link to='/aboutme'>About Me</Link>
                        </li>
                        <NavItem href='https://github.com/jamesmart77/resume'>Resume</NavItem>
                        <NavItem href='https://github.com/jamesmart77'>GitHub</NavItem>
                        <NavItem href='https://www.linkedin.com/in/jamesrmartineau'>LinkedIn</NavItem>
                    </div>
                </Navbar>
            </Row>
        )
    }
}

export default Nav;
