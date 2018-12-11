import React, {Component} from 'react';
import Navigation from "../navigation";
import Footer from "../footer";
import {Col, Grid, Row} from "react-bootstrap";



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
            <React.Fragment>

                <main className="fullscreen">


                    <div className="title">Welcome to Page Transition App!</div>
                    <section>
                        <p>Click the links on header to change routes!</p>
                    </section>

                    {/*<Grid>*/}
                        {/*<Row>*/}
                            {/*<Col xs={12} md={12}>*/}

                                {/*<h1>About me</h1>*/}

                                {/*<Paragraph/>*/}
                                {/*<Paragraph/>*/}
                                {/*<Paragraph/>*/}
                                {/*<Paragraph/>*/}


                            {/*</Col>*/}

                        {/*</Row>*/}
                    {/*</Grid>*/}
                </main>

                <Footer/>

            </React.Fragment>
        );
    }
}

export default About;