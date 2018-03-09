import React from "react";

function Map(props) {
    return (
        // <h1>Map here!</h1>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="800px">
            height="600px" viewBox="0 0 800 600" enable-background="new 0 0 800 600" xml: space="preserve">
            <g id="maproot">
                <g id="Base">
                    <polyline fill="#D2D4D6" points="100.21,125.25 677.68,125.25 677.68,431.59 242.46,431.59 	" />
                </g>
                <g id="landmarks-test" className="buildings">
                    <rect id="rect3" x="490.35" y="152.72" fill="#3B81C4" width="150.7" height="67.61" />
                    <rect id="rect2" x="490.35" y="239.34" fill="#3B81C4" width="150.7" height="60.66" />
                    <rect id="rect1" x="490.35" y="316.8" fill="#3B81C4" width="150.7" height="59.86" />
                    <rect id="rect-big" x="287.53" y="316.8" fill="#7E4C9E" width="180.99" height="59.86" />
                    <ellipse id="circle1" fill="#E2DD1C" cx="218.87" cy="201.31" rx="52.46" ry="48.59" />
                </g>
                <g id="nopointer-text">
                    <rect x="321.34" y="340.04" fill="none" width="135.21" height="25.35" />
                    <text transform="matrix(1 0 0 1 321.3379 348.5615)" fill="#FFFFFF" fontFamily="'MyriadPro-Regular'" fontSize="12">Hi, i’m a test caption</text>
                </g>
            </g>

        </svg>
    )
}

export default Map;