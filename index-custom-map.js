let svgTest;
let myImage = new Image();
myImage.src = "testMap.svg";

// Create a map object with a simple set of coordinates
let map = L.map('main-map', {
    crs: L.CRS.Simple
});

// Set the bounds for the map. We will be setting its bounds to the width and height of the provided image.
let bounds = [[0,0], [myImage.width,myImage.height]];

// Add a layer for the custom map
let image = L.imageOverlay(myImage.src, bounds).addTo(map);

let myIcon = new L.icon({
    iconUrl: 'leaf-red.png',
    iconSize:     [38, 95], // size of the icon
 });

 let markerOptions = {
    title: "MyPlace",
    clickable: true,
    draggable: true,
    riseOnHover: true,
    icon: myIcon
        
 };

$(document).ready( () => {

    console.log(myImage);
    
    // svgTest = $("#svg-test");

    // console.log(svgTest);

    // Fit the custom map to the bounds specified above
    map.fitBounds(bounds);

    // Add event handler to the map that adds a new marker
    // map.on(
    //     "click",
    //     (e) => {
    //         new L.Marker([e.latlng.lat, e.latlng.lng]).addTo(map);  
    //     }
    // )

    map.on(
        "click",
        (e) => {
            // new L.Marker([e.latlng.lat, e.latlng.lng]).addTo(map);
            alert(`This is located at ${e.latlng.lat} and ${e.latlng.lng}`);  
        }
    )

});