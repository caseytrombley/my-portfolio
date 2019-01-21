import React from 'react';
import './drawing.scss';

import Pencil from '../pencil';
import Marker from '../marker';
import TSquare from '../t-square';


import Plx from "react-plx";
import {
    paperData,
    graphPaperData,
    pencilData,
    tsquareData

} from "../../../data/parallax";


const Drawing = () => {
    return (
        <div className="drawing">

            <Plx
                parallaxData={ paperData }
                className="float-left"
            >
                <div className="paper">


                </div>

            </Plx>


            <Plx
                parallaxData={ pencilData }
                className="float-left"
            >
                <Pencil/>

            </Plx>
            <Plx
                parallaxData={ tsquareData }
                className="float-left"
            >
                <TSquare/>

            </Plx>

            <Plx
                parallaxData={ graphPaperData }
                className="float-left"
            >
                <div className="graph-paper">


                </div>

            </Plx>
            <div className="markers float-left">

                <Marker/>
                <Marker/>
                <Marker/>

            </div>




        </div>

    );
};

export default Drawing;