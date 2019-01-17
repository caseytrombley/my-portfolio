import React, {Component} from 'react';
import Footer from "../Footer";
import {NavLink} from "react-router-dom";

class Home extends Component {


    render() {
        return (
            <React.Fragment>

                <div className="bg-picture">
                    <main className="fullscreen">




                        <h1 className="cover-heading">Welcome to my portfolio</h1>

                        <p className="lead">My name is Casey. I love to design and engineer. </p>

                        <section>

                            <NavLink
                                exact
                                activeClassName="active-nav"
                                className="btn btn-lg btn-primary nav-link floater"
                                to="/about"
                            >
                                Learn more about me
                            </NavLink>

                        </section>


                    </main>
                </div>

                <Footer/>

            </React.Fragment>
        );
    }
}

export default Home;