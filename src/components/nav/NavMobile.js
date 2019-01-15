import React from 'react';
import Plx from "react-plx";
import {brandData, navData} from "../../data/parallax";
import {NavLink} from "react-router-dom";
import Links from "./Links";
import {Modal} from "react-bootstrap";

class NavMobile extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (



            <React.Fragment>

                <nav className="navbar navbar-inverse">
                    <div className="container">
                        <div className="navbar-header">

                            <Plx
                                parallaxData={ brandData }
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

                <button
                    onClick={this.handleShow}
                    type="button"
                    className="navbar-toggle x navbar-toggle collapsed"
                >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <button
                        onClick={this.handleClose}
                        type="button"
                        className="navbar-toggle x navbar-toggle"
                    >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Modal.Body>

                        <ul className="nav modal-nav">
                            <Links onClick={this.handleClose}/>
                        </ul>


                    </Modal.Body>

                </Modal>

            </React.Fragment>

        )
    }
};

export default NavMobile;