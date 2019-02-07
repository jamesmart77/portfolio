import React, { Component } from "react";
import { Navbar, NavItem, Row } from 'react-materialize';

export class Nav extends Component {
   render(){
        return(
            <Row>
                <Navbar brand='James Martineau' right>
                    <NavItem href='https://github.com/jamesmart77'>GitHub</NavItem>
                </Navbar>
            </Row>
        )
    }
}

export default Nav;
