let svg = null;
let maproot = null;

d3.xml("testMap.svg", (error, xml) => {
    let htmlSVG = document.getElementById("map");

    htmlSVG.appendChild(xml.documentElement.getElementById("maproot"));

    svg = d3.select(htmlSVG);
    maproot = svg.select("#maproot");

    let xmlSVG = d3.select(xml.getElementsByTagName("svg")[0]);
    svg.attr("viewBox", xmlSVG.attr("viewBox"));

    let buildingSquares = maproot.selectAll("g.buildings");
    // console.log(buildingSquares);
    
    buildingSquares.selectAll("rect").each(function(){
        // console.log(d3.select(this));
        // for (item in d3.select(this)){
        //     console.log(item);
        // }
        // console.log(d3.select(this).attr("id"));
        if(d3.select(this).attr("id") === "rect-big"){
            console.log("Stop!!!");
        }else{
            d3.select(this).style("fill", "green");
        }
        
    })
})