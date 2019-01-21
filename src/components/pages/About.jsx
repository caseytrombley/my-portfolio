import React, {Component} from 'react';
import {Grid} from "react-bootstrap";
import Footer from "../Footer";

import SectionIntro from "../sections/section-intro";
import SectionFocus from '../sections/section-my-focus';
import SectionDrawing from '../sections/section-drawing';

class About extends Component {

    render() {

        return (
            <React.Fragment>

                <main className="about">

                    <Grid>

                        <SectionIntro/>

                        <SectionFocus/>

                        <SectionDrawing/>

                    </Grid>

                </main>

                <Footer/>

            </React.Fragment>
        );
    }
}

export default About;