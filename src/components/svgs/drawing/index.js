import React from 'react';
import './drawing.scss';

import Pencil from '../pencil';
import Marker from '../marker';
import TSquare from '../t-square';


import Plx from "react-plx";
import {
    paperData,
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

            <div className="markers float-left">

                <Marker/>
                <Marker/>
                <Marker/>

            </div>


            <Plx
                parallaxData={ tsquareData }
                className="float-left"
            >
                <TSquare/>

            </Plx>

        </div>

    );
};

export default Drawing;