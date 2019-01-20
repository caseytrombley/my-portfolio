import React from 'react';
import './drawing.scss';

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
                <div className="pencil">


                </div>

            </Plx>

        </div>

    );
};

export default Drawing;