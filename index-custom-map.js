let svgTest;

// Create a map object with a simple set of coordinates
let map = L.map('main-map', {
    crs: L.CRS.Simple
});

// Set the bounds for the map
let bounds = [[0,0], [1000,1000]];

// Add a layer for the custom map
let image = L.imageOverlay('testMap.svg', bounds).addTo(map);

$(document).ready( () => {
    
    // svgTest = $("#svg-test");

    // console.log(svgTest);

    // Fit the custom map to the bounds specified above
    map.fitBounds(bounds);

});