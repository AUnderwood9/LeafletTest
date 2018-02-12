// $(document).ready(
//     () => {
//         console.log($("#main-map"));
//         var map = $K.map('#main-map');
//     }
// )

// A list of city coordinates. These coordinates are not the actual coordinates according to the U.S. Map
var cityCoords = {
    birmingham: [33.543682 , -86.779633],
    tuscaloosa: [33.2098, -87.5692],
   //huntsville: [34.7448, -87.6675],
    huntsville: [34.69 , -86.65],
    muslceShoals: [34.745, -87.665]
};

var mapOptions = {
    center: [33.543682 , -86.779633], // Birmingham
    zoom: 7.5
 }

 var myIcon = new L.icon({
    iconUrl: 'leaf-red.png',
    shadowUrl: 'leaf-shadow.png',
    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64] // size of the shadow
 });

// Latitude then longitude

// This draws a line from Birmingham to Huntsville then to memphis, Tn. Notice that each points is the actual coordinates or an approximation of that particular city
 var drawingCoords = [
    [33.543682 , -86.779633],
    [34.69 , -86.65],
    [35.1495, -90.0490]
    //[35.5 , -90.05],
 ];

 // Draws a line between the cities of Birmingham, Tuscaloosa, Huntsville, and muscle Shoals to create a polygon
 var polygonCoords = [
    // [33.543682 , -86.779633],
    // [33.2098, -87.5692],
    // [34.7448, 87.6675],
    // [34.7304, 86.5861]
    cityCoords.birmingham,
    cityCoords.huntsville,
    cityCoords.muslceShoals,
    cityCoords.tuscaloosa
 ];

 // Options for the circle polygon. This will create a circle that will cover Alabama with Birmingham in the center
 var circleOptions = {
    color: "yellow",
    fillColor: '#f03',
    fillOpacity: 0
 }

 var markerOptions = {
    title: "MyPlace",
    clickable: true,
    draggable: true,
    riseOnHover: true,
    icon: myIcon
        
 };

$(document).ready(
    () => {
        // var mymap = L.map('main-map').setView([51.505, -0.09], 13);
        
        // L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        //     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        //     maxZoom: 18,
        //     id: 'mapbox.streets',
        //     accessToken: 'your.mapbox.access.token'
        // }).addTo(mymap);

        // Create a map object and load it onto the element that is selected
        var map = new L.map('main-map', mapOptions);

        // add a map or "layer" or "tile" to the map object
        var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

        // create a polyline object (documentation here: http://leafletjs.com/reference-1.3.0.html)
        var polyline = L.polyline(drawingCoords, {color: 'blue'});

        // Create a polygon object (documentation: http://leafletjs.com/reference-1.3.0.html#polygon)
        var polygon = L.polygon(polygonCoords, {color: 'brown'});

        // Create a circle object (documentation: http://leafletjs.com/reference-1.3.0.html#circle)
        var circle = L.circle(cityCoords.birmingham, 200000, circleOptions);

        // add the TileLayer object (map tiles/pieces) to the map that was added to its container in the DOM
        map.addLayer(layer);

        // add a marker to the map (Documentation: http://leafletjs.com/reference-1.3.0.html#marker)
        var marker = new L.marker(mapOptions.center, markerOptions);

        //marker.addTo(map);

        // This also adds the marker to the map (may not be the best way, but it actually makes more sense)
        // map.addLayer(marker);

        // Bind popup and add map items
        marker.bindPopup("Wuzzup cuz").openPopup();
        marker.addTo(map);
        polyline.addTo(map);
        polygon.addTo(map);
        circle.addTo(map);
    }
)