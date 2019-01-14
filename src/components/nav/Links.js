import React from 'react';
import {NavLink} from "react-router-dom";

const Links = () => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    );
};

export default Links;