import React, {Component} from 'react';
import {
    Container,
    Navbar,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

import { Link } from "react-router-dom";


import './style.css';

export default class Header extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(){
        return (
            <Container fluid={true} className="Header_Component">
                <Container>
                    <Navbar dark expand="md">
                        <Link to="/" className="navbar-brand">The movie</Link>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/components/">Components</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Container>
            </Container>
        )
    }
};