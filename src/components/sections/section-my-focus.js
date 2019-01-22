import React from 'react';
import {Col, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {Media} from "react-breakpoints";

import DiagramPuzzle from "../svgs/diagram-puzzle";
import DiagramStack from "../svgs/diagram-stack";
import {diagramStackData, focusSectionData} from "../../data/parallax";
import Plx from "react-plx";


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
                As someone with a love for learning, I am always trying new things. Discovering new technique is something I enjoy as much as creating new ideas. When I am presented a challenge I know how to start small and break it down piece by piece using solid fundamentals.
            </p>

            <DiagramPuzzle/>

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

// const Column2 = () => {
//     return (
//         <Col xs={12} md={6} className="text-center">
//
//             <Plx
//                 parallaxData={ diagramFilesData }
//                 className="diagram"
//             >
//                 <DiagramFiles/>
//             </Plx>
//
//
//         </Col>
//     )
// };
const Column3 = () => {
    return (
        <Col xs={12} md={6} className="text-center">

            <Plx
                parallaxData={ diagramStackData }
            >
                <DiagramStack/>
            </Plx>



        </Col>
    )
};
const SectionFocus = () => {
    return (
        <Plx
            parallaxData={ focusSectionData }
        >
            <Row className="section-focus">

                <Media>
                    {({ breakpoints, currentBreakpoint }) =>
                        breakpoints[currentBreakpoint] > breakpoints.tablet ? (
                            <React.Fragment>
                                <Column1/>
                                <Column3/>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <Column3/>
                                <Column1/>
                            </React.Fragment>
                        )
                    }
                </Media>

            </Row>

        </Plx>

    );
};

export default SectionFocus;