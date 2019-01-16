import React, {Component} from 'react';
import {Col, Grid, Row} from "react-bootstrap";
import Footer from "../Footer";

class NotFound extends Component {
    render() {
        return (
            <React.Fragment>

                <main className="generic">

                    <Grid>
                        <Row>
                            <Col xs={12} md={12}>
                                <h1>
                                    Page not found!
                                </h1>
                                <p>
                                    Sorry but the page you requested does not exist. Please try again.
                                </p>
                            </Col>
                        </Row>
                    </Grid>

                </main>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default NotFound;