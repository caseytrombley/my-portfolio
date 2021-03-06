import React, {Component} from 'react';
import {Col, Grid, Row} from "react-bootstrap";
import Footer from "../Footer";


class Contact extends Component {


    render() {
        return (
            <React.Fragment>

                <main className="contact">
                    <Grid>
                        <Row>
                            <Col xs={12} md={12}>

                                <h1>Contact me</h1>



                            </Col>

                        </Row>
                        <Row>
                            <Col xs={12} md={12}>

                                <form method="POST">
                                    <input type="email" name="email" placeholder="Your email"/>
                                    <textarea name="message" placeholder="Test Message"></textarea>
                                    <button type="submit">Send Test</button>
                                </form>



                            </Col>

                        </Row>
                    </Grid>
                </main>

                <Footer/>

            </React.Fragment>
        );
    }
}

export default Contact;