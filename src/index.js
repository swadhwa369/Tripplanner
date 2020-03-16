const mapboxgl = require("mapbox-gl");
const {map, marker} = require("./marker")
// mapboxgl.accessToken = 'pk.eyJ1Ijoic3dhZGh3YTEiLCJhIjoiY2s3dW5xaG5yMTNkMTNlbnFqcTc5bG40diJ9.7ul73g98DDf5gsJ3_o1hng';

// const map = new mapboxgl.Map({
//   container: "map",
//   center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
//   zoom: 12, // starting zoom
//   style: "mapbox://styles/mapbox/streets-v11" // mapbox has lots of different map styles available.
// });

// const point = document.createElement("div");
// point.style.width = "32px";
// point.style.height = "39px";
// point.style.backgroundImage = "http://i.imgur.com/WbMOfMl.png";
// new mapboxgl.Marker(point).setLngLat([-87.6354, 41.8885]).addTo(map)
marker = markers("activity", [-87.6354, 41.8885]);