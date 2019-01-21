import React from 'react';
import {Col, Row} from "react-bootstrap";
import Drawing from "../svgs/drawing";
import DrawingMobile from "../svgs/drawing-mobile";

import Plx from "react-plx";
import {drawingTextData} from "../../data/parallax";
import {Media} from "react-breakpoints";

const Column1 = () => {
    return (
        <Col xs={12} md={6}>

            <Drawing/>

        </Col>
    )
};
const Column1_Mobile = () => {
    return (
        <Col xs={12} md={6}>

            <DrawingMobile/>

        </Col>
    )
};
const Column2 = () => {
    return (
        <Col xs={12} md={6}>

            <Plx
                parallaxData={ drawingTextData }
            >
                <h2>
                    Drawing is fundamental.
                </h2>
                <p className="lead text-muted">
                    I love to draw. It's always my first step on a new project.
                </p>
                <p>
                    Drawing helps me get the ideas out my head quickly without wasting time trying to do it all on the computer.
                    I don't think any technology will ever replace the ease and efficiency of using paper and pencil to visualize my ideas.
                </p>
            </Plx>
        </Col>
    )
};
const SectionDrawing = () => {
    return (

        <Row className="section-drawing">

            <Media>
                {({ breakpoints, currentBreakpoint }) =>
                    breakpoints[currentBreakpoint] > breakpoints.mobileLandscape ? (
                        <React.Fragment>
                            <Column1/>
                            <Column2/>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>

                            <Column1_Mobile/>
                            <Column2/>
                        </React.Fragment>
                    )
                }
            </Media>



        </Row>

    );
};

export default SectionDrawing;