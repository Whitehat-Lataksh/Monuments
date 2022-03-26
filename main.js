mapboxgl.accessToken =
  "pk.eyJ1IjoibGF0YWtzaCIsImEiOiJjbDEzbTZqNzIwN2xiM2NscWNnbGg1eDQ3In0.8CWgkMJWAwZJTNIGigrlNg";

var longitute = 56.663355335;
var latitude = 25.567324;

//Taj mahal
var tajMahal_coordinates = [78.0421421968381, 27.17535476245818];
//Qubut Minar
var qutubMinar_coordinates = [77.18561715723898, 28.524654485752514];
//Hawa Mahal
var hawaMahal_coordinates = [75.82670088235542, 26.924251958065376];
//India Gate
var indiaGate_coordinates = [77.22949896888764, 28.61311919093274];
//Lotus Temple
var lotusTemple_coordinates = [77.25879421121611, 28.553614493094518];
//Red Fort
var redFort_coodrinates = [77.24096665354713, 28.656168597109406];

//Creating the map
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  centre: [longitute, latitude],
  zoom: 5,
});

//Adding the geocoder
map.addControl(
  new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
  })
);

//Adding the taj mahal image to the position
var taj_mahal_image = document.querySelector("#taj-mahal");
var hawa_mahal_image = document.querySelector("#hawa-mahal");
var india_gate_image = document.querySelector("#india-gate");
var lotus_temple_image = document.querySelector("#lotus-temple");
var qutub_minar_image = document.querySelector("#qutub-minar");
var red_fort_image = document.querySelector("#red-fort");

//Setting the image to the position
var taj_mahal_marker = new mapboxgl.Marker({
  element: taj_mahal_image,
})
  .setLngLat(tajMahal_coordinates)
  .addTo(map);

//This one for Hawa Mahal
var hawaMahal_marker = new mapboxgl.Marker({
  element: hawa_mahal_image,
})
  .setLngLat(hawaMahal_coordinates)
  .addTo(map);

//Now for the Red Fort
var red_fort_marker = new mapboxgl.Marker({
  element: red_fort_image,
})
  .setLngLat(redFort_coodrinates)
  .addTo(map);

var qutub_minar_marker = new mapboxgl.Marker({
  element: qutub_minar_image,
})
  .setLngLat(qutubMinar_coordinates)
  .addTo(map);

var lotus_temple_markeqr = new mapboxgl.Marker({
  element: lotus_temple_image,
})
  .setLngLat(lotusTemple_coordinates)
  .addTo(map);

var india_gate_marker = new mapboxgl.Marker({
  element: india_gate_image,
})
  .setLngLat(indiaGate_coordinates)
  .addTo(map);
