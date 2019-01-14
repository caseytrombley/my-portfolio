import React from "react";
import styled from "styled-components";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';

function Container({ location }) {
    return (

        <TransitionGroup className="transition-group">
            <CSSTransition
                key={location.key}
                timeout={{ enter: 300, exit: 300 }}
                classNames="fade"
            >
                <section className="route-section">
                    <Switch location={location}>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/about' component={About}/>
                        <Route exact path='/contact' component={Contact}/>
                        <Route exact path='/experience' component={Experience}/>
                        <Route exact path='/education' component={Education}/>
                        <Route exact path='/skills' component={Skills}/>
                        <Route exact path='/portfolio' component={Portfolio}/>
                        <Route exact path='/contact' component={Contact}/>

                        {/* when none of the above match, <NoMatch> will be rendered */}
                        <Route component={NotFound}/>

                    </Switch>
                </section>
            </CSSTransition>
        </TransitionGroup>

    );
}

// const Wrapper = styled.div`
//   .fade-enter {
//     left: -100%;
//   }
//
//   .fade-enter.fade-enter-active {
//     left: 0;
//     transition: 300ms ease-in;
//   }
//
//   .fade-exit {
//     left: 0;
//   }
//
//   .fade-exit.fade-exit-active {
//     left: -100%;
//     transition: 300ms ease-in;
//   }
//
//   div.transition-group {
//     position: relative;
//   }
//
//   section.route-section {
//     position: absolute;
//     width: 100%;
//     top: 0;
//     left: 0;
//     bottom: 0;
//   }
//
//   @keyframes slide {
//     100% { left: 0; }
//   }
//
// `;

export default withRouter(Container);
