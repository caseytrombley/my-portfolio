import React, {Component} from 'react';
import Footer from "../Footer";
import {NavLink} from "react-router-dom";

class Home extends Component {


    render() {
        return (
            <React.Fragment>

                <main className="fullscreen">




                    <h1 className="cover-heading">Welcome to my portfolio</h1>

                    <p className="lead">This is my work</p>

                    <section>

                        <NavLink
                            exact
                            activeClassName="active-nav"
                            className="btn btn-lg btn-primary nav-link"
                            to="/about"
                        >
                            Learn more about me
                        </NavLink>

                    </section>


                </main>

                <Footer/>

            </React.Fragment>
        );
    }
}

export default Home;