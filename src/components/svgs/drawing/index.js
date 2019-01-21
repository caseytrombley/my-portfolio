import React from 'react';
import './drawing.scss';

import Pencil from '../pencil';
import Marker from '../marker';

import Plx from "react-plx";
import {
    paperData,
    pencilData,
    markerData

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

        </div>

    );
};

export default Drawing;