let svg = null;
let maproot = null;
let rectColors = { color1: "green", color2: "red" };

let animateSquare = (objToAnimate) => {
    let currentObj = d3.select(objToAnimate);
    let initialColor = rectColors.color1;
    let fadeToColor = rectColors.color2;

    let currentTransition = () => currentObj.transition().duration(1000);
    // currentTransition().style("fill", fadeToColor).transition().duration(2000).style("fill", initialColor).on("end", () => {animateSquare(objToAnimate)});
    currentTransition().style("fill", fadeToColor).transition().duration(1000).style("fill", initialColor).on("end", () => {animateSquare(objToAnimate)});
}

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
            d3.select(this).on("click", () => {
                console.log("Click");
            });
            animateSquare(this);
        }
        
    });

    // buildingSquares.selectAll("rect").each(function(){
        

    //     if(d3.select(this).attr("id") === "rect-big"){
    //         console.log("Stop!!!");
    //     }else{
    //         d3.select(this).on("click", () => {
    //             console.log("Click");
    //         })
    //     }
        
    // })
});