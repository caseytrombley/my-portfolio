import React from 'react';
import {logoData, navData} from "../../data/parallax";

import Plx from "react-plx";
import {NavLink} from "react-router-dom";
import Links from './Links';

const NavDesktop = () => {
    return (

        <nav className="navbar navbar-inverse">
            <div className="container">
                <div className="navbar-header">

                    <Plx
                        parallaxData={ logoData }
                        id="logo"
                    >

                        <NavLink exact to="/">
                                <svg id='cube' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 223.3'>
                                    <polygon className='st0' points='97,0 0,56 29.3,74.8 97,33.3 164.7,72.4 192,56'
                                    />
                                    <polygon points='0,167.3 96,223.3 192,167.3 164.7,151.7 97,190 29.2,150.7'
                                    />
                                    <g id='inner-cube'>
                                        <polygon className='st0' points='97,112 137.3,88 97,64.7 56,88.3' />
                                        <polygon className='st1' points='56,135.4 96,160.1 97,112 56,88.3' />
                                        <polygon points='97,112 137.3,88 137.3,135 96,160.1' />
                                    </g>


                                    <polygon className='st2' points='164.7,72.4 164.7,151.7 137.3,135 137.3,88'
                                    />
                                    <polygon points='164.7,72.4 192,56 192,167.3 164.7,151.7' />
                                    <polygon className='st2' points='0,56 0,167.3 29.2,150.7 29.3,74.8' />
                                </svg>

                                <div className="box-inner">
                                    <div className="front"></div>
                                    <div className="back"></div>
                                    <div className="top"></div>
                                    <div className="bottom"></div>
                                    <div className="left"></div>
                                    <div className="right"></div>
                                </div>

                            </NavLink>


                    </Plx>


                </div>

                <Plx
                    parallaxData={ navData }
                    id="navbar"

                >
                    <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <Links/>
                        </ul>
                    </div>
                </Plx>


            </div>
        </nav>


    );
};

export default NavDesktop;