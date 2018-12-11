import React, {Component} from 'react';
import Footer from "../footer";

class Home extends Component {


    render() {
        return (
            <React.Fragment>

                <main className="fullscreen">


                    <div className="title">Welcome to Page Transition App!</div>
                    <section>
                        <p>Click the links on header to change routes!</p>
                    </section>


                </main>

                <Footer/>

            </React.Fragment>
        );
    }
}

export default Home;