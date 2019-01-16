import React, {Component} from 'react';
import {Col, Grid, Row} from "react-bootstrap";
import Footer from "../Footer";

import {educationData} from "../../data/data";


class Education extends Component {


    render() {
        return (
            <React.Fragment>

                <main className="education">

                    <Grid>
                        <Row>
                            <Col xs={12} md={12}>
                                <h1>Education</h1>
                            </Col>
                        </Row>
                        {educationData.map(p =>
                            <Row key={p.school}>
                                <Col xs={12} md={12}>

                                    <h3 className="h3 highlight-dark">{p.school}</h3>
                                    <span className="divide-from-next">
                                        <strong>{p.degree}</strong>
                                    </span>

                                    <span>{p.major}</span>
                                    <p>GPA: {p.gpa}</p>



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

export default Education;