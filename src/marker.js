const mapboxgl = require("mapbox-gl");
mapboxgl.accessToken = 'pk.eyJ1Ijoic3dhZGh3YTEiLCJhIjoiY2s3dW5xaG5yMTNkMTNlbnFqcTc5bG40diJ9.7ul73g98DDf5gsJ3_o1hng';

const map = new mapboxgl.Map({
    container: "map",
    center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
    zoom: 12, // starting zoom
    style: "mapbox://styles/mapbox/streets-v11" // mapbox has lots of different map styles available.
  });

const iconURLS = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png",
    original: "http://i.imgur.com/WbMOfMl.png"
}

function markers(type, coordinates){
    if (!iconURLs.hasOwnProperty(type)) {
        type = iconURLS.original;
    }
    this.type = type.toLowerCase();
    this.coordinates = coordinates;

    const point = document.createElement("div");
    point.style.width = "32px";
    point.style.height = "39px";
    point.style.backgroundImage = iconURLS.original;

    if(this.type === 'hotel'){
        point.style.backgroundImage = `url(${iconURLS.hotels})`;
        return new mapboxgl.Marker(point).setLngLat(this.coordinates).addTo(map);
    }else if(this.type === 'restaurant'){
        point.style.backgroundImage = `url(${iconURLS.restaurants})`;
        return new mapboxgl.Marker(point).setLngLat(this.coordinates).addTo(map);
    }else if(this.type === 'activity'){
        point.style.backgroundImage = `url(${iconURLS.activities})`;
        return new mapboxgl.Marker(point).setLngLat(this.coordinates).addTo(map);
    }else{
        return new mapboxgl.Marker(point).setLngLat(this.coordinates).addTo(map);   
    }
    
}
new mapboxgl.Marker(point).setLngLat([-87.6354, 41.8885]).addTo(map)

module.exports = {
    map,
    markers
};