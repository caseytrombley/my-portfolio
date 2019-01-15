import React, {Component} from 'react';
import {Col, Grid, Row} from "react-bootstrap";
import Footer from "../Footer";

import PianoKeys from '../anims/piano';

class About extends Component {


    render() {


        return (
            <React.Fragment>

                <main className="about">



                    <Grid>
                        <Row>
                            <Col xs={12} md={6}>
                                <PianoKeys/>

                            </Col>
                            <Col xs={12} md={6}>
                                <h1>Hello and welcome to my portfolio.</h1>
                                <p>
                                    I created this site with <strong>React</strong>. ❤️ I designed and built everything using <strong>Javascript</strong>, <strong>HTML5</strong>, <strong>CSS3</strong> and <strong>SVG</strong>. Some of the nuts and bolts are from Bootstrap and Google, etc.
                                </p>
                                <p>
                                    My main focus is front-end web development. I started working with CSS and HTML in 2004 and have been steadily focused on full stack web development, software development and design. My main areas of focus are CSS, HTML, and Javascript.
                                </p>
                                <p>
                                    Music is something that inspires me. My favorite instrument is the piano. In my opinion it's the true powerhouse of songwriting. I have always been inspired by keyboards and love to play whether it's in the studio, live onstage, or on the vintage Baldwin upright in my living room.
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={12}>

                                <section className="">
                                    <div className="container">
                                        <h2 className="">Creative process and workflow</h2>
                                        <p className="lead text-muted">Something short and leading about the collection
                                            below—its contents, the creator, etc. Make it short and sweet, but not too
                                            short so folks don't simply skip over it entirely.</p>

                                    </div>
                                </section>



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