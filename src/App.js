import React from "react";
import { HashRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Container from "./components/Container";

import ReactBreakpoints from 'react-breakpoints'

const breakpoints = {
    mobile: 320,
    mobileLandscape: 480,
    tablet: 768,
    tabletLandscape: 1024,
    desktop: 1200,
    desktopLarge: 1500,
    desktopWide: 1920,
};

const App = () => (

        <Router>
            <ReactBreakpoints breakpoints={breakpoints}>
                <React.Fragment>
                    <Header />
                    <Container />
                </React.Fragment>
            </ReactBreakpoints>
        </Router>

);

export default App;