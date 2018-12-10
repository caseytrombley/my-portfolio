import _ from 'lodash'
import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import {
    Container,
    Divider,
    Dropdown,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Visibility,
} from 'semantic-ui-react';

const menuStyle = {
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    marginBottom: '1em',
    marginTop: '0',
    transition: 'box-shadow 0.5s ease, padding 0.5s ease',
};

const fixedMenuStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
};

const overlayStyle = {
    float: 'left',
    margin: '0em 3em 1em 0em',
};

const fixedOverlayStyle = {
    ...overlayStyle,
    position: 'fixed',
    top: '80px',
    zIndex: 10,
};

const overlayMenuStyle = {
    position: 'relative',
    left: 0,
    transition: 'left 0.5s ease',
};

const fixedOverlayMenuStyle = {
    ...overlayMenuStyle,
    left: '800px',
};



class NavigationLinks extends React.Component{

    state = {
        menuFixed: false
    };



    stickTopMenu = () => this.setState({ menuFixed: true });


    unStickTopMenu = () => this.setState({ menuFixed: false });



    render(){

        const { menuFixed, overlayFixed, overlayRect } = this.state;
        const default_path = (this.props.match.path === '/' || this.props.match.path === '/about');

        return(



            <React.Fragment>


                <Container >

                    top
                </Container>

                {/* Attaching the top menu is a simple operation, we only switch `fixed` prop and add another style if it has
            gone beyond the scope of visibility
          */}
                <Visibility
                    onBottomPassed={this.stickTopMenu}
                    onBottomVisible={this.unStickTopMenu}
                    once={false}
                >
                    <Menu
                        borderless
                        fixed={menuFixed ? 'top' : undefined}
                        style={menuFixed ? fixedMenuStyle : menuStyle}
                    >
                        <Container >


                            <div className="ui attached stackable menu">
                                <div className="ui container">
                                    <a className="item">
                                        <i className="home icon"></i> Home
                                    </a>
                                    <a className="item">
                                        <i className="grid layout icon"></i> Browse
                                    </a>
                                    <a className="item">
                                        <i className="mail icon"></i> Messages
                                    </a>
                                    <div className="ui simple dropdown item">
                                        More
                                        <i className="dropdown icon"></i>
                                        <div className="menu">
                                            <a className="item"><i className="edit icon"></i> Edit Profile</a>
                                            <a className="item"><i className="globe icon"></i> Choose Language</a>
                                            <a className="item"><i className="settings icon"></i> Account Settings</a>
                                        </div>
                                    </div>

                                </div>
                            </div>



                        </Container>
                    </Menu>
                </Visibility>






            </React.Fragment>



        );
    }
}

export default withRouter(NavigationLinks);
