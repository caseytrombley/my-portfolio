import React, {Component} from 'react';
import {Col, Grid, Row} from "react-bootstrap";
import Footer from "../Footer";

class Music extends Component {


    render() {
        return (
            <React.Fragment>

                <main className="contact">
                    <Grid>
                        <Row>
                            <Col xs={12} md={12}>

                                <h1>Music</h1>



                            </Col>

                        </Row>
                        <Row>
                            <Col xs={12} md={12}>





                            </Col>

                        </Row>
                    </Grid>
                </main>

                <Footer/>

            </React.Fragment>
        );
    }
}

export default Music;