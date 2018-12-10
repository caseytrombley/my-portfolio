import React, {Component} from 'react';
import Navigation from "../navigation";
import Footer from "../footer";
import _ from "lodash";
import {Container, Icon, Image, Menu, Visibility} from "semantic-ui-react";


const Paragraph = () => (
    <p>
        {[
            'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ',
            'tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas ',
            'semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ',
            'ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean ',
            'fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. ',
            'Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor ',
            'neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, ',
            'accumsan porttitor, facilisis luctus, metus',
        ].join('')}
    </p>
);

class About extends Component {


    render() {
        return (
            <div>

                <Navigation/>

                <Container >
                    <Paragraph />
                    <Paragraph />
                    <Paragraph />
                    <Paragraph />
                    <Paragraph />
                    <Paragraph />
                    <Paragraph />
                </Container>

                <Footer/>

            </div>
        );
    }
}

export default About;