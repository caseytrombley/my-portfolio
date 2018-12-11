import React, {Component} from 'react';
import Footer from "../footer";
import {Col, Grid, Row} from "react-bootstrap";


class About extends Component {


    render() {
        return (
            <React.Fragment>

                <main className="">



                    <Grid>
                        <Row>
                            <Col xs={12} md={12}>

                                <h1>About me</h1>

                                <p>This is my about  me page</p>


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