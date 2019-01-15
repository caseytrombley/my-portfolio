import React from 'react';
const svgStyle = {
    enableBackground: 'new 0 0 923 783'
};
const PianoKeys = () => {
    return (

        <div>

            <svg
                version="1.1"
                id="piano-keys"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	            viewBox="0 0 923 783"
                style={svgStyle}
                xmlSpace="preserve"
            >

                <rect y="3" className="st0" width="131" height="780"/>
                <rect x="132" y="3" className="st0" width="131" height="780"/>
                <rect x="264" y="3" className="st0" width="131" height="780"/>
                <rect x="396" y="3" className="st0" width="131" height="780"/>
                <rect x="528" y="2" className="st0" width="131" height="780"/>
                <rect x="660" y="2" className="st0" width="131" height="780"/>
                <rect x="792" y="2" className="st0" width="131" height="780"/>
                <rect x="757" y="3" width="61" height="454"/>
                <rect x="627" y="3" width="61" height="454"/>
                <rect x="495" y="3" width="61" height="454"/>
                <rect x="233" y="3" width="61" height="454"/>
                <rect x="101" y="3" width="61" height="454"/>

            </svg>

        </div>
    );
};

export default PianoKeys;