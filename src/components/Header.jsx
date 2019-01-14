import React from "react";

import Plx from 'react-plx';
import { headerData } from '../data/parallax';
import { Media } from 'react-breakpoints';

import NavMobile from './nav/NavMobile';
import NavDesktop from './nav/NavDesktop';

class Header extends React.Component {

    // closeMenu = () => {
    //     //document.querySelector('.collapse').classList.add('hide');
    //     document.querySelector('.navbar-toggle').click();
    // };

    render() {

        return (
            <Plx
                parallaxData={ headerData }
                id="nav"
            >
                <header>
                    <Media>
                        {({ breakpoints, currentBreakpoint }) =>
                            breakpoints[currentBreakpoint] > breakpoints.tablet ? (
                                <NavDesktop/>
                            ) : (
                                <NavMobile />
                            )
                        }
                    </Media>
                </header>
            </Plx>

        );

    }
}


export default Header;
