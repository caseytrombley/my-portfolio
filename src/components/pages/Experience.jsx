import React, {Component} from 'react';
import {Col, Grid, Row} from "react-bootstrap";
import Footer from "../Footer";

import {workExperienceData} from "../../data/data";


class Experience extends Component {


    render() {
        return (
            <React.Fragment>

                <main className="experience">

                    <Grid>
                        <Row>
                            <Col xs={12} md={12}>
                                <h1>Experience</h1>
                            </Col>
                        </Row>
                        {workExperienceData.map(p =>
                        <Row key={p.name}>
                            <Col xs={12} md={12}>

                                <h3 className="h3 highlight-dark">{p.name}</h3>
                                <span className="divide-from-next"><strong>{p.title}</strong></span>

                                <span>{p.tenure}</span>
                                <p>{p.description}</p>
                                <h5>Key job functions:</h5>
                                <ul>
                                    {p.job_functions.map(i =>
                                        <li>{i}</li>
                                    )}
                                </ul>


                            </Col>

                        </Row>

                        )}
                    </Grid>

                </main>

                <Footer/>

            </React.Fragment>
        );
    }
}

export default Experience;