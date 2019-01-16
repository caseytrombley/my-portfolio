import React, {Component} from 'react';
import {Col, Grid, Row} from "react-bootstrap";
import Footer from "../Footer";

import IconCSS from '../svgs/icon-files/css';
import IconAI from '../svgs/icon-files/ai';
import IconPS from '../svgs/icon-files/ps';
import IconHTML from '../svgs/icon-files/html';
import IconJS from '../svgs/icon-files/js';
import IconNODE from '../svgs/icon-files/node';
import IconREACT from '../svgs/icon-files/react';

class Skills extends Component {


    render() {
        return (
            <React.Fragment>

                <main className="skills">
                    <Grid>
                        <Row>
                            <Col xs={12} md={12}>

                                <h1>Skills</h1>

                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} md={12}>
                                <p className="lead">
                                    We all have skills. Here a few of mine.
                                </p>

                            </Col>
                        </Row>




                        <Row className="add-padding-to-cols">
                            <Col xs={12} md={6}>

                                <div className="media">
                                    <div className="media-left">

                                        <IconCSS/>

                                    </div>
                                    <div className="media-body">
                                        <h4 className="media-heading">CSS</h4>
                                        CSS stands for <em>Cascading Style Sheets</em>. I am an expert with CSS and use it design and debug applications.
                                    </div>
                                </div>

                            </Col>
                            <Col xs={12} md={6}>

                                <div className="media">
                                    <div className="media-left">

                                        <IconHTML/>

                                    </div>
                                    <div className="media-body">
                                        <h4 className="media-heading">HTML</h4>
                                        HTML stands for <em>Hypertext Transfer Protocol</em>, and it is the language that websites are written in. I am an expert HTML writer and have deep knowledge of the syntax.
                                    </div>
                                </div>

                            </Col>
                            <Col xs={12} md={6}>

                                <div className="media">
                                    <div className="media-left">

                                        <IconJS/>

                                    </div>
                                    <div className="media-body">
                                        <h4 className="media-heading">Javascript</h4>
                                        Javascript is commonly used to create interactive effects within web browsers. I use this as a powerful tool to write advanced web applications.
                                    </div>
                                </div>

                            </Col>
                            <Col xs={12} md={6}>

                                <div className="media">
                                    <div className="media-left">

                                        <IconAI/>

                                    </div>
                                    <div className="media-body">
                                        <h4 className="media-heading">Adobe Illustrator</h4>
                                        My bread and butter. Can't say enough good things about this application. I use this to create vector art for print and web.
                                    </div>
                                </div>

                            </Col>
                            <Col xs={12} md={6}>

                                <div className="media">
                                    <div className="media-left">

                                        <IconPS/>

                                    </div>
                                    <div className="media-body">
                                        <h4 className="media-heading">Adobe Photoshop</h4>
                                        This fine piece of software has been around since I started learning graphic design in 1998. I have been using it since to create awesome designs for print and web.
                                    </div>
                                </div>

                            </Col>
                            <Col xs={12} md={6}>

                                <div className="media">
                                    <div className="media-left">

                                        <IconNODE/>

                                    </div>
                                    <div className="media-body">
                                        <h4 className="media-heading">Node</h4>
                                        This revolutionary application has made modern web development possible. It allows me to build robust applications and leverage other libraries and frameworks.
                                    </div>
                                </div>

                            </Col>

                            <Col xs={12} md={6}>

                                <div className="media">
                                    <div className="media-left">

                                        <IconREACT/>

                                    </div>
                                    <div className="media-body">
                                        <h4 className="media-heading">React</h4>
                                        This framework is great for building a modern web application using javascript and JSX syntax. It is a joy to work in React for the ease of building and organizing separate components and the science of using data to represent objects.
                                    </div>
                                </div>

                            </Col>


                        </Row>
                    </Grid>
                </main>

                <Footer/>

            </React.Fragment>
        );
    }
}

export default Skills;