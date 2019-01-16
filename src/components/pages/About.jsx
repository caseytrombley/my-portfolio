import React, {Component} from 'react';
import {Col, Grid, Row} from "react-bootstrap";
import Footer from "../Footer";

import PianoKeys from '../svgs/piano';
import DiagramFiles from '../svgs/diagram-files';

class About extends Component {


    render() {


        return (
            <React.Fragment>

                <main className="about">



                    <Grid>
                        <Row>
                            <Col xs={12} md={6} className="text-center">
                                <PianoKeys/>

                            </Col>
                            <Col xs={12} md={6}>
                                <h1>A little bit about me</h1>

                                <h3>
                                    My name is Casey. I am a professional designer.
                                </h3>


                                <p className="lead text-muted">
                                    Since 2004 I have worked for a variety of industries designing media for print and digital. Throughout this time I have gained expert-level skills in drawing, graphic design, web development and music.
                                </p>

                                {/*<p className="lead text-muted">*/}
                                    {/*Art and music are two things I am most passionate about. My favorite instrument is the piano. I have always been inspired by keyboards and love to play whether it's in the studio, live onstage, or on the vintage upright in my living room.*/}
                                {/*</p>*/}
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={6}>

                                <h2 className="">Creative process and workflow.</h2>
                                <p className="lead text-muted">
                                    My main area of focus is full-stack web development, which means I can design and build websites from concept to completion.
                                </p>

                                <p>
                                    I built this website using <strong>React</strong>, <strong>Javascript</strong>, <strong>HTML5</strong>, <strong>CSS3</strong> and <strong>Animated SVG</strong>. Some of the nuts and bolts are from Bootstrap and other various Javascript libraries.
                                </p>



                            </Col>
                            <Col xs={12} md={6} className="text-center">

                                <DiagramFiles/>



                            </Col>


                        </Row>
                    </Grid>
                </main>

                <Footer/>

            </React.Fragment>
        );
    }
}

export default About;