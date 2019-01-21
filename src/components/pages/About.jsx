import React, {Component} from 'react';
import {Col, Grid, Row} from "react-bootstrap";
import Footer from "../Footer";

import PianoKeys from '../svgs/piano';
import DiagramFiles from '../svgs/diagram-files';
import Drawing from '../svgs/drawing';

import {NavLink} from "react-router-dom";
import {pianoData, diagramFilesData, drawingTextData} from "../../data/parallax";
import Plx from "react-plx";

class About extends Component {


    render() {


        return (
            <React.Fragment>

                <main className="about">



                    <Grid>
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
                                    Solving problems with good design is what motivates me.
                                </h3>

                                {/*<p className="lead text-muted">*/}
                                    {/*Art and music are two things I am most passionate about. My favorite instrument is the piano. I have always been inspired by keyboards and love to play whether it's in the studio, live onstage, or on the vintage upright in my living room.*/}
                                {/*</p>*/}
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={6}>

                                <h2 className="">My focus.</h2>
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
                            <Col xs={12} md={6} className="text-center">

                                <Plx
                                    parallaxData={ diagramFilesData }
                                >
                                    <DiagramFiles/>
                                </Plx>


                            </Col>


                        </Row>

                        <Row className="section-drawing">
                            <Col xs={12} md={6}>

                                <Drawing/>

                            </Col>
                            <Col xs={12} md={6}>

                                <Plx
                                    parallaxData={ drawingTextData }
                                >
                                    <h3>
                                        Drawing is fundamental.
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, wisi mnesarchum percipitur ius cu, melius discere complectitur mea in. Cetero adipiscing ne sit, erat mundi dolores ne nec, populo impetus et sed. Vim impetus scripserit an, ex sea fabulas civibus fabellas, ad omnis exerci minimum pri. Duo ubique ponderum gloriatur eu.
                                    </p>
                                </Plx>
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