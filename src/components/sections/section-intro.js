import React from 'react';
import {Col, Row} from "react-bootstrap";
import Plx from "react-plx";
import {pianoData} from "../../data/parallax";
import PianoKeys from "../svgs/piano";

const SectionIntro = () => {
    return (

        <Row>
            <Col xs={12} md={6} className="text-center">
                <Plx
                    parallaxData={ pianoData }
                >
                    <PianoKeys/>
                </Plx>

            </Col>
            <Col xs={12} md={6}>
                <h1>I am the creative type</h1>

                <p className="lead text-muted">
                    Since 2004 I have worked in a variety of industries sharpening my skills in drawing, graphic design, web development, and music.
                </p>


                <h3>
                    Bringing my visions to life is what motivates me.
                </h3>

                {/*<p className="lead text-muted">*/}
                {/*Art and music are two things I am most passionate about. My favorite instrument is the piano. I have always been inspired by keyboards and love to play whether it's in the studio, live onstage, or on the vintage upright in my living room.*/}
                {/*</p>*/}
            </Col>
        </Row>

    );
};

export default SectionIntro;