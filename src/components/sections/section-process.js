import React from 'react';
import {Col, Row} from "react-bootstrap";
import {Media} from "react-breakpoints";

import DiagramBlocks from "../svgs/diagram-blocks";
import {processTextData, processSVGData} from "../../data/parallax";
import Plx from "react-plx";


const Column1 = () => {
    return (
        <Col xs={12} md={6}>

            <Plx
                parallaxData={ processTextData }
            >
                <h2>My process.</h2>
                <p className="lead text-muted">
                    It's all about iteration and refinement.
                </p>

                <p>
                    I use fundamental building blocks and compose things from small parts. Composing larger things from these small parts allows me to scale up as I go. Taking the time for good organization pays off by allowing me to iterate my ideas quickly.
                </p>
            </Plx>

            {/*
            <p>
                Just like drawing or composing a piece of music, an artist tries and fails over and over again until their vision really takes it's shape. Through my studies in art one of my biggest takeaways was the idea of <em>drawing from the inside out</em>. Start small and rough it in with basic shapes. The skeleton is the important first step to drawing a figure. Draw that out from within the body and the rest will follow. I understand that even the best products on the market today started out as a failure, but what made them grow beyond their first viable product was that it had good bones.

                I understand that many of the greatest creations in the world started out small, and that it took layer upon layer of refinement to polish them into the success they are today.

                Just like drawing or composing a piece of music, an artist tries and fails over and over again until their vision really takes form. I use solid fundamental building blocks to compose things from small parts, that way I can easily iterate and scale up as I go.

            </p>*/}





        </Col>
    )
};
const Column2 = () => {
    return (
        <Col xs={12} md={6} className="text-center justify-vertical">

            <Plx
                parallaxData={ processSVGData }
            >
                <DiagramBlocks/>
            </Plx>


        </Col>
    )
};

const SectionProcess = () => {
    return (

        <Row className="section-process">

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

export default SectionProcess;