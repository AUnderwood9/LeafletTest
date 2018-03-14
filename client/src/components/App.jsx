import React, { Fragment } from "react";
import mySvg from "../../resources/images/testMap.svg"
import Map from "./views/Map/Map"
import mainStyle from "./index.scss"

function App(props){
    console.log(mySvg);
    return(
        <Fragment>
            <div id="map">
            
            </div>
            {/* <MapPage /> */}
            <Map />
        </ Fragment>
    );
}

export default App;