import React, {Component} from 'react';
import {Col, Grid, Row} from "react-bootstrap";
import Footer from "../Footer";

import PianoKeys from '../anims/piano';

class About extends Component {


    render() {
        const cardStyle = {
            width: 'auto',

        };
        const imageStyle = {
            height: '225px',
            width: '100%',
            display: 'block'
        };

        return (
            <React.Fragment>

                <main className="about">



                    <Grid>
                        <Row>
                            <Col xs={8} md={6}>
                                <PianoKeys/>

                            </Col>
                            <Col xs={8} md={6}>
                                <h1>Hello and welcome to my portfolio.</h1>
                                <p>
                                    I created this site with React. I designed and built everything using Javascript, HTML5, CSS3 and SVG. Some of the nuts and bolts are from Bootstrap and Google, etc.
                                </p>
                                <p>
                                    My main focus is front-end web development. I started working with CSS and HTML in 2004 and have been steadily focused on full stack web development, software development and design. My main areas of focus are CSS, HTML, and Javascript. I am a self-taught piano player and avid songwriter. I have written nearly 200 songs and have countless hours of studio and live playing experience.
                                </p>
                                <p>

                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={12}>

                                <section className="jumbotron text-center">
                                    <div className="container">
                                        <h1 className="jumbotron-heading">Album example</h1>
                                        <p className="lead text-muted">Something short and leading about the collection
                                            below—its contents, the creator, etc. Make it short and sweet, but not too
                                            short so folks don't simply skip over it entirely.</p>
                                        <p>
                                            <a href="/" className="btn btn-primary my-2">Main call to action</a>
                                            <a href="/" className="btn btn-secondary my-2">Secondary action</a>
                                        </p>
                                    </div>
                                </section>


                                <div className="album py-5 bg-light">
                                    <div className="container">
                                        <div className="row">

                                            <div className="col-md-4">

                                                <div className="card" style={cardStyle}>

                                                    <img className="card-img-top"
                                                         data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                                                         alt="Thumbnail [100%x225]"
                                                         style={imageStyle}
                                                         src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1684ce15783%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1684ce15783%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.828125%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                                         data-holder-rendered="true"

                                                    />

                                                    <div className="card-body">
                                                        <h5 className="card-title">Card title</h5>
                                                        <p className="card-text">Some quick example text to build on
                                                            the card title and make up the bulk of the card's
                                                            content.</p>
                                                        <a href="/" className="btn btn-primary">Go somewhere</a>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>

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