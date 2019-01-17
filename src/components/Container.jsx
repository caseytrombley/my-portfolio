import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Music from './pages/Music';

// import Contact from './pages/Contact';
// import Education from './pages/Education';
import NotFound from './pages/NotFound';

function Container({ location }) {

    window.scroll(0,0);

    return (


        <TransitionGroup className="transition-group">
            <CSSTransition
                key={location.pathname}
                timeout={{ enter: 300, exit: 300 }}
                classNames="fade"
            >
                <section className="route-section">
                    <Switch location={location}>

                        <Route exact path='/' component={Home}/>
                        <Route exact path='/about' component={About}/>
                        <Route exact path='/experience' component={Experience}/>
                        <Route exact path='/skills' component={Skills}/>
                        <Route exact path='/portfolio' component={Portfolio}/>
                        <Route exact path='/music' component={Music}/>

                        {/*
                        <Route exact path='/education' component={Education}/>
                        <Route exact path='/contact' component={Contact}/>
                        */}

                        {/* when none of the above match, <NoMatch> will be rendered */}
                        <Route component={NotFound}/>

                    </Switch>
                </section>
            </CSSTransition>
        </TransitionGroup>

    );
}

export default withRouter(Container);
