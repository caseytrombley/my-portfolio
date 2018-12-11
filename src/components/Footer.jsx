import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <footer>


                <Grid>
                    <Row>
                        <Col xs={12} md={8}>
                            Footer
                        </Col>
                        <Col xs={6} md={4}>
                            Footer
                        </Col>
                    </Row>
                </Grid>

            </footer>
        );
    }
}

export default Footer;