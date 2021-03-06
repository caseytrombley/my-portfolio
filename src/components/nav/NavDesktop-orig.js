import React from 'react';
import {headerData, logoData, navData} from "../../data/parallax";
import {Nav, Navbar} from "react-bootstrap";

import Plx from "react-plx";
import {NavLink} from "react-router-dom";

const NavDesktop = () => {
    return (
        <Plx
            parallaxData={ headerData }
            id="nav"
        >
            <header>
                <Navbar inverse collapseOnSelect >
                    <Navbar.Header>

                        <Plx
                            parallaxData={ logoData }
                            id="logo"
                        >
                            <Navbar.Brand>
                                <NavLink exact to="/">
                                    <svg id='cube' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 223.3'>
                                        <polygon className='st0' points='97,0 0,56 29.3,74.8 97,33.3 164.7,72.4 192,56'
                                        />
                                        <polygon points='0,167.3 96,223.3 192,167.3 164.7,151.7 97,190 29.2,150.7'
                                        />
                                        <g id='inner-cube'>
                                            <polygon className='st0' points='97,112 137.3,88 97,64.7 56,88.3' />
                                            <polygon className='st1' points='56,135.4 96,160.1 97,112 56,88.3' />
                                            <polygon points='97,112 137.3,88 137.3,135 96,160.1' />
                                        </g>


                                        <polygon className='st2' points='164.7,72.4 164.7,151.7 137.3,135 137.3,88'
                                        />
                                        <polygon points='164.7,72.4 192,56 192,167.3 164.7,151.7' />
                                        <polygon className='st2' points='0,56 0,167.3 29.2,150.7 29.3,74.8' />
                                    </svg>

                                    <div className="box-inner">
                                        <div className="front"></div>
                                        <div className="back"></div>
                                        <div className="top"></div>
                                        <div className="bottom"></div>
                                        <div className="left"></div>
                                        <div className="right"></div>
                                    </div>

                                </NavLink>
                            </Navbar.Brand>

                        </Plx>

                        <Navbar.Toggle className="navbar-toggle x"/>



                    </Navbar.Header>
                    <Plx
                        parallaxData={ navData }
                        id="navbar"

                    >
                        <Navbar.Collapse>

                            <Nav pullRight>


                                <li>
                                    <NavLink
                                        exact
                                        activeClassName="active-nav"
                                        className="nav-link"
                                        to="/about"
                                    >
                                        About
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        exact
                                        activeClassName="active-nav"
                                        className="nav-link"
                                        to="/experience"
                                    >
                                        Work Experience
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        exact
                                        activeClassName="active-nav"
                                        className="nav-link"
                                        to="/education"
                                    >
                                        Education
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        exact
                                        activeClassName="active-nav"
                                        className="nav-link"
                                        to="/skills"
                                    >
                                        Skills
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        exact
                                        activeClassName="active-nav"
                                        className="nav-link"
                                        to="/portfolio"
                                    >
                                        Portfolio
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        exact
                                        activeClassName="active-nav"
                                        className="nav-link"
                                        to="/contact"
                                    >
                                        Contact
                                    </NavLink>
                                </li>


                            </Nav>
                        </Navbar.Collapse>
                    </Plx>

                </Navbar>

            </header>
        </Plx>
    );
};

export default NavDesktop;