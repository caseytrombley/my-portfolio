import React, {Component} from 'react';
import {Col, Grid, Row} from "react-bootstrap";
import Footer from "../Footer";

import Gallery from 'react-grid-gallery';
import {logosData, designData} from "../../data/portfolio";


class Portfolio extends Component {
    render() {
        return (

            <React.Fragment>

                <main className="portfolio">

                    <Grid>


                        <Row>
                            <Col xs={12} md={2}>

                                <h2>Graphics</h2>

                            </Col>

                            <Col xs={12} md={10}>

                                <Gallery images={designData} rowHeight={100}/>

                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} md={2}>

                                <h2>Logos</h2>

                            </Col>

                            <Col xs={12} md={10}>

                                <Gallery images={logosData} rowHeight={100}/>

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