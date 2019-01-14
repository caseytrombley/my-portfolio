import React, {Component} from 'react';
import {Col, Grid, Row} from "react-bootstrap";
import Footer from "../Footer";

class Portfolio extends Component {
    render() {
        return (

            <React.Fragment>

                <main className="portfolio">

                    <Grid>
                        <Row>
                            <Col xs={6} md={4}>


                                <div className="thumbnail">
                                    <img src="..." alt="..."/>
                                    <div className="caption">
                                        <h3>Thumbnail label</h3>
                                        <p>...</p>
                                        <p>
                                            <a href="/" className="btn btn-primary" role="button">
                                                Button
                                            </a>
                                            <a href="/" className="btn btn-default" role="button">Button</a>
                                        </p>
                                    </div>
                                </div>



                            </Col>

                        </Row>

                        <Row>
                            <Col xs={6} md={4}>


                                <div className="thumbnail">
                                    <img src="..." alt="..."/>
                                    <div className="caption">
                                        <h3>Thumbnail label</h3>
                                        <p>...</p>
                                        <p>
                                            <a href="/" className="btn btn-primary" role="button">
                                                Button
                                            </a>
                                            <a href="/" className="btn btn-default" role="button">Button</a>
                                        </p>
                                    </div>
                                </div>



                            </Col>

                        </Row>
                        <Row>
                            <Col xs={6} md={4}>


                                <div className="thumbnail">
                                    <img src="..." alt="..."/>
                                    <div className="caption">
                                        <h3>Thumbnail label</h3>
                                        <p>...</p>
                                        <p>
                                            <a href="/" className="btn btn-primary" role="button">
                                                Button
                                            </a>
                                            <a href="/" className="btn btn-default" role="button">Button</a>
                                        </p>
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

export default Portfolio;