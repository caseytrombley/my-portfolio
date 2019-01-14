import React, {Component} from 'react';
import {Col, Grid, Row} from "react-bootstrap";
import Footer from "../Footer";


class About extends Component {


    render() {
        return (
            <React.Fragment>

                <main className="about">



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