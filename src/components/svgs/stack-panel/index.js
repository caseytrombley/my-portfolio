import React from 'react';
import './stack-panel.scss';

const svgStyle = {
    enableBackground: 'new 0 0 240 133'
};

const StackPanel = () => {
    return (

        <svg
            version="1.1"
            // id="stack-panel"
            className="stack-panel"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 240 133"
            style={svgStyle}
            xmlSpace="preserve"
        >

            <polygon className="st0" points="120,0 0,57 0,71 120,133 240,71 240,57 "/>
            <polygon className="st1" points="0,57 0,71 120,133 120,116 "/>
            <polygon className="st2" points="240,57 240,71 120,133 120,116 "/>

        </svg>


);
};

export default StackPanel;