import React from 'react';
import {Col, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import Plx from "react-plx";
import {diagramFilesData} from "../../data/parallax";
import DiagramFiles from "../svgs/diagram-files";
import DiagramBlocks from "../svgs/diagram-blocks";

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
                As someone with a love for learning, I am always on the cutting edge of technology and trying new things. I love to tinker and see what amazing things are possible.
            </p>



            <DiagramBlocks/>


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