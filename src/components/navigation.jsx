
import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';


class Navigation extends React.Component{


    render(){

        const default_path = (this.props.match.path === '/' || this.props.match.path === '/about')

        return(

            <React.Fragment>

                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <NavLink exact to="/about">
                                Casey Trombley
                            </NavLink>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>

                        <Nav pullRight>


                            <li>
                                <NavLink
                                    exact
                                    className={default_path ? "activeNav nav-link" : 'nav-link'} to="/about"
                                >
                                    About
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    exact
                                    activeClassName="activeNav"
                                    className="nav-link" to="/experience"
                                >
                                    Work Experience
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    exact
                                    activeClassName="activeNav"
                                    className="nav-link"
                                    to="/education"
                                >
                                    Education
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    exact
                                    activeClassName="activeNav"
                                    className="nav-link"
                                    to="/skills"
                                >
                                    Skills
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    exact
                                    activeClassName="activeNav"
                                    className="nav-link"
                                    to="/portfolio"
                                >
                                    Portfolio
                                </NavLink>
                            </li>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </React.Fragment>

        );
    }
}

export default withRouter(Navigation);