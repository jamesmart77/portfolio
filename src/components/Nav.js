import React, { Component } from "react";
import { Navbar, NavItem, Row } from 'react-materialize';

export class Nav extends Component {
   render(){
        return(
            <Row>
                <Navbar className='truncate' brand='James Martineau' right>
                    <NavItem href='/aboutme'>About Me</NavItem>
                    <NavItem href='https://github.com/jamesmart77'>GitHub</NavItem>
                    <NavItem href='https://www.linkedin.com/in/jamesrmartineau'>LinkedIn</NavItem>
                </Navbar>
            </Row>
        )
    }
}

export default Nav;
