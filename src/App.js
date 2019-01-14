import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Container from "./components/Container";

const App = () => (
    <Router>
        <React.Fragment>
            <Header />
            <Container />
        </React.Fragment>
    </Router>
);

export default App;