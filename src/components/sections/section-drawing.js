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
const Column1Mobile = () => {
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
                    Drawing is important.
                </h2>
                <p className="lead text-muted">
                    It's a great starting point to communicate your vision.
                </p>
                <p>
                    Drawing helps me get ideas down quickly without wasting time at the computer.
                    I don't think any technology could replace the facility of using paper and pencil to visualize ideas.
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

                            <Column1Mobile/>
                            <Column2/>
                        </React.Fragment>
                    )
                }
            </Media>



        </Row>

    );
};

export default SectionDrawing;