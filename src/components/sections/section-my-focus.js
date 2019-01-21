import React from 'react';
import {Col, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import Plx from "react-plx";
import {diagramFilesData} from "../../data/parallax";
import DiagramFiles from "../svgs/diagram-files";

import {Media} from "react-breakpoints";

const Column1 = () => {
    return (
        <Col xs={12} md={6}>

            <h2>My focus.</h2>
            <p className="lead text-muted">
                My main area of focus is full-stack web development. I design and build websites from concept to completion.
            </p>

            <p>
                Since 2004 I have worked professionally in the field and have produced hundreds of designs and dozens of applications and websites.
            </p>

            <p>
                I built this website with <strong>React</strong>, <strong>Javascript</strong>, <strong>HTML5</strong>, <strong>CSS3</strong> and <strong>Animated SVG</strong>. Some of the nuts and bolts are from Bootstrap and other various Javascript libraries.
            </p>

            <p>
                The latest technology I like to work with is the <strong>MERN</strong> stack, although I am seasoned in older technologies such as the <strong>LAMP</strong> stack.
            </p>
            <p>
                The tools I use are all cutting edge. Programs like <strong>git</strong> allow me to easily manage my source code, and <strong>Node</strong> along with <strong>Express</strong> allows me to do server magic within my applications.
            </p>



            <NavLink
                exact
                activeClassName="active-nav"
                className="btn btn-primary btn-lg nav-link floater"
                to="/skills"
            >
                Learn more about my skills
            </NavLink>




        </Col>
    )
};
const Column2 = () => {
    return (
        <Col xs={12} md={6} className="text-center">

            <Plx
                parallaxData={ diagramFilesData }
                className="diagram"
            >
                <DiagramFiles/>
            </Plx>


        </Col>
    )
};

const SectionFocus = () => {
    return (

        <Row className="section-focus">

            <Media>
                {({ breakpoints, currentBreakpoint }) =>
                    breakpoints[currentBreakpoint] > breakpoints.tablet ? (
                        <React.Fragment>
                            <Column1/>
                            <Column2/>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <Column2/>
                            <Column1/>
                        </React.Fragment>
                    )
                }
            </Media>

        </Row>

    );
};

export default SectionFocus;