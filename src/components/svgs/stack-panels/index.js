import React from 'react';
import './stack-panels.scss';

const svgStyle = {
    enableBackground: 'new 0 0 240 288'
};

const StackPanel = () => {
    return (

        <svg
            version="1.1"
            id="stack-panels"
            className="stack-panels"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 240 288"
            style={svgStyle}
            xmlSpace="preserve"
        >

            <g>
                <polygon className="st0" points="120,155 0,212 0,226 120,288 240,226 240,212 	"/>
                <polygon className="st1" points="0,212 0,226 120,288 120,271 	"/>
                <polygon className="st2" points="240,212 240,226 120,288 120,271 	"/>
            </g>
            <g>
                <polygon className="st0" points="120,116 0,173 0,187 120,249 240,187 240,173 	"/>
                <polygon className="st1" points="0,173 0,187 120,249 120,232 	"/>
                <polygon className="st2" points="240,173 240,187 120,249 120,232 	"/>
            </g>
            <g>
                <polygon className="st0" points="120,77 0,134 0,148 120,210 240,148 240,134 	"/>
                <polygon className="st1" points="0,134 0,148 120,210 120,193 	"/>
                <polygon className="st2" points="240,134 240,148 120,210 120,193 	"/>
            </g>
            <g>
                <polygon className="st0" points="120,38 0,95 0,109 120,171 240,109 240,95 	"/>
                <polygon className="st1" points="0,95 0,109 120,171 120,154 	"/>
                <polygon className="st2" points="240,95 240,109 120,171 120,154 	"/>
            </g>
            <g>
                <polygon className="st0" points="120,0 0,57 0,71 120,133 240,71 240,57 	"/>
                <polygon className="st1" points="0,57 0,71 120,133 120,116 	"/>
                <polygon className="st2" points="240,57 240,71 120,133 120,116 	"/>
            </g>

        </svg>


);
};

export default StackPanel;