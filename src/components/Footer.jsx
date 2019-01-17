import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">


                <Grid>
                    <Row>
                        <Col xs={12} md={8}>
                            <h3 className="text-uppercase">Contact Information</h3>
                            <p>Please email me directly: <a href="mailto:portfolio.inquiries@gmail.com?subject=Mail from Casey's Portfolio">portfolio.inquiries@gmail.com</a>  </p>
                        </Col>
                        {/*
                        <Col xs={6} md={4}>
                            <div className="col-md-3 mb-md-0 mb-3">

                                <h4 className="text-uppercase">Links</h4>

                                <ul className="list-unstyled">
                                    <li>
                                        <a href="/">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="/">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="/">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="/">Link 4</a>
                                    </li>
                                </ul>

                            </div>

                            <div className="col-md-3 mb-md-0 mb-3">

                                <h5 className="text-uppercase">Links</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <a href="/">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="/">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="/">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="/">Link 4</a>
                                    </li>
                                </ul>

                            </div>
                        </Col>
                        */}
                    </Row>
                </Grid>

            </footer>
        );
    }
}

export default Footer;