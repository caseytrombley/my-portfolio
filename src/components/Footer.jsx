import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <footer>


                <Grid>
                    <Row>
                        <Col xs={12} md={8}>
                            <h5 className="text-uppercase">Footer Content</h5>
                            <p>Here you can use rows and columns here to organize your footer content.</p>
                        </Col>
                        <Col xs={6} md={4}>
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
                    </Row>
                </Grid>

            </footer>
        );
    }
}

export default Footer;