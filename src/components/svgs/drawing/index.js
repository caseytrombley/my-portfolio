import React from 'react';
import './drawing.scss';
import Pencil from '../pencil';

import Plx from "react-plx";
import {
    paperData,
    pencilData,
    backdropData

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

        </div>

    );
};

export default Drawing;