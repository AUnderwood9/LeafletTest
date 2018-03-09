let svg = null;
let maproot = null;
let rectColors = { color1: "green", color2: "red" };
let myTool = d3.select("body").append("div")	
            .attr("class", "tooltip")				
            .style("opacity", 0);


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
    SVGElement.prototype.getTransformToElement = SVGElement.prototype.getTransformToElement || function(elem) {
        return elem.getScreenCTM().inverse().multiply(this.getScreenCTM());
    };

    let xmlSVG = d3.select(xml.getElementsByTagName("svg")[0]);
    svg.attr("viewBox", xmlSVG.attr("viewBox"));

    let buildingSquares = maproot.selectAll("g.buildings");
    let buildingSquareText = maproot.select("g#nopointer-text");

    // maproot.on("mouseover", function(d) {
    //     let bbox = this.getBBox();
    //     let gtrans = this.getTransformToElement(document.getElementById('maproot'));

    //     // position in relation to maproot group
    //     let x = gtrans.e + bbox.x + bbox.width / 2;
    //     let y = gtrans.f + bbox.y + bbox.height / 2;

    //     // console.log(x,y);

    //         myTool.transition()		
    //             .duration(200)		
    //             .style("opacity", .9);		
    //         myTool.html(`Hi, this is root <br/>`)	
    //             .style("left", (d3.event.pageX) + "px")		
    //             .style("top", (d3.event.pageY - 28) + "px");	
    //         })					
    //     .on("mouseout", function(d) {		
    //         myTool.transition()		
    //             .duration(500)		
    //             .style("opacity", 0);	
    //     });
    
    buildingSquares.selectAll("rect").each(function(){
        if(d3.select(this).attr("id") === "rect-big"){
            console.log("Stop!!!");
            d3.select(this)
            .on("mouseover", function(d) {		
                myTool.transition()		
                    .duration(200)		
                    .style("opacity", .9);		
                myTool.html(`${buildingSquareText.select("text").text()} <br/>`)	
                    .style("left", (d3.event.pageX) + "px")		
                    .style("top", (d3.event.pageY - 28) + "px");	
                })					
            .on("mouseout", function(d) {		
                myTool.transition()		
                    .duration(500)		
                    .style("opacity", 0);	
            });
            // console.log(buildingSquareText.select("text").text());
        }else{
            d3.select(this).style("fill", "green");
            d3.select(this).on("click", () => {
                console.log("Click");
            });
            animateSquare(this);
        }
        
    });
});