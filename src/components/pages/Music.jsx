import React, {Component} from 'react';
import {Col, Grid, Row} from "react-bootstrap";
import Footer from "../Footer";

import {soundcloudData} from "../../data/soundcloud";

class Music extends Component {


    render() {
        return (
            <React.Fragment>

                <main className="music">
                    <Grid>
                        <Row>
                            <Col xs={12} md={12}>

                                <h1>Music</h1>

                            </Col>

                        </Row>
                        <Row>

                            {soundcloudData.map(m =>

                                <Col xs={12} md={4} className="song-column">

                                    <iframe
                                        width="100%"
                                        height="300"
                                        scrolling="no"
                                        frameBorder="no"
                                        allow="autoplay"
                                        title={m.title}
                                        src={m.src}
                                    />


                                </Col>

                            )}

                        </Row>
                    </Grid>
                </main>

                <Footer/>

            </React.Fragment>
        );
    }
}

export default Music;