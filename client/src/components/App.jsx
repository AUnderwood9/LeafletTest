import React, { Fragment } from "react";
import mySvg from "../../resources/images/testMap.svg"
import Map from "./views/Map/Map"
import mainStyle from "./index.scss"
import D3Map from "./views/MapManipulator";
import * as d3 from "d3";

function App(props){
    console.log(mySvg);
    return(
        <Fragment>
            <div id="map">
            
            </div>
            {/* <MapPage /> */}
            <Map />
            <D3Map />
        </ Fragment>
    );
}

export default App;