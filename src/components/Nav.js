import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, NavItem, Row } from 'react-materialize';

export default function Nav() {
    return(
        <Row>
            <Navbar className='truncate' brand='James Martineau' right>
                <div>
                    <li>
                        <Link to='/aboutme'>About Me</Link>
                    </li>
                    <NavItem href='https://jamesmart77.github.io/resume'>Resume</NavItem>
                    <NavItem href='https://github.com/jamesmart77'>GitHub</NavItem>
                    <NavItem href='https://www.linkedin.com/in/jamesrmartineau'>LinkedIn</NavItem>
                </div>
            </Navbar>
        </Row>
    )
}
