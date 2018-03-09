import React, { Component, Fragment } from "react";
import Map from "./../../views/Map/Map";
import * as d3 from "d3";

class MapPage extends Component{
    constructor(props){
        super(props);

        this.svg = null;
        this.maproot = null;
        this.rectColors = { color1: "green", color2: "red" };
        this.myTool = d3.select("body").append("div")	
                    .attr("class", "tooltip")				
                    .style("opacity", 0);

        console.log(this.myTool);
    }

    render(){
        this.mapRender = d3.xml("testMap.svg", (error, xml) => {
            let htmlSVG = document.getElementById("map");
        
            htmlSVG.appendChild(xml.documentElement.getElementById("maproot"));
        
            svg = d3.select(htmlSVG);
            maproot = svg.select("#maproot");
            SVGElement.prototype.getTransformToElement = SVGElement.prototype.getTransformToElement || function(elem) {
                return elem.getScreenCTM().inverse().multiply(this.getScreenCTM());
            };
        
            let xmlSVG = d3.select(xml.getElementsByTagName("svg")[0]);
            svg.attr("viewBox", xmlSVG.attr("viewBox"));
        
            let buildingSquares = maproot.selectAll("g.buildings");
            let buildingSquareText = maproot.select("g#nopointer-text");

            
            
        });

        return (
            // <Map />
            this.mapRender
        );
    }
}

export default MapPage;