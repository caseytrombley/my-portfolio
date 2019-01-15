import React, {Component} from 'react';
import {Col, Grid, Row} from "react-bootstrap";
import Footer from "../Footer";

import Gallery from 'react-grid-gallery';
import {logosData, designData} from "../../data/images";


class Portfolio extends Component {
    render() {
        return (

            <React.Fragment>

                <main className="portfolio">

                    <Grid>
                        <Row>
                            <Col xs={12} md={3}>

                                <h2>Logos</h2>

                            </Col>

                            <Col xs={12} md={9}>

                                <Gallery images={logosData}/>

                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} md={3}>

                                <h2>Websites</h2>

                            </Col>

                            <Col xs={12} md={9}>

                                <Gallery images={designData}/>

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