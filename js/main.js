// Using Leaflet for creating the map and adding controls for interacting with the map

//
//--- Part 1: adding base maps ---
//

//creating the map; defining the location in the center of the map (geographic coords) and the zoom level. These are properties 
//of the leaflet map object L.map.
//the map window has been given the id 'map' in the .html file
var map = L.map('map', {
	center: [47.6, 13.30],
	zoom: 10
});

// alternatively the setView method could be used for placing the map in the window
//var map = L.map('map').setView([47.5, 13.05], 8);

// add open street map as base layer
var osmap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);


    
//var ormap = L.tileLayer('https://{s}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png', {
//		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//	})

//var otmap = L.tileLayer('https://tiles.stadiamaps.com/tiles/{variant}/{z}/{x}/{y}{r}.{ext}', {
//		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//	})
// add OpenTopoMap from Leaflet providers https://leaflet-extras.github.io/leaflet-providers/preview/
var otmap = L.tileLayer.provider('OpenRailwayMap');
var omap = L.tileLayer.provider('SafeCast');

//var ormap = L.tileLayer.provider('OpenRailwayMap');

// for using the two base maps in the layer control, I defined a baseMaps variable
var baseMaps = {
	"OpenStreetMap": osmap
    //"OpenRailMap": otmap
}

//
//---- Part 2: Adding a scale bar
//

L.control.scale({position:'bottomleft',imperial:false}).addTo(map);



var easystyle = {
    "color": "#009000",
    "weight": 10,
    "opacity": 10
}
var mediumstyle = {
    "color": "#ffff00",
    "weight": 10,
    "opacity": 10
}
var difficultstyle = {
    "color": "#ff0000",
    "weight": 10,
    "opacity": 10
}
var entries ={"type":"FeatureCollection",
    "features":[{"type":"Feature","properties":{"NAME":"Rinnkelndensteig","HEIGHT":"","ACENT":"","Decent":""},"geometry":{"type":"LineString","coordinates":[[13.1,47.1],[13.11,47.12]]}},
    {"type":"Feature","properties":{"NAME":"Abstieg Ischlerhütte","HEIGHT":"","ACENT":"","Decent":""},"geometry":{"type":"LineString","coordinates":[[13.2,47.2],[13.21,47.22]]}},
    {"type":"Feature","properties":{"NAME":"Backenstein Appelhaus","HEIGHT":"","ACENT":"","Decent":""},"geometry":{"type":"LineString","coordinates":[[13.3,47.3],[13.31,47.32]]}},
    {"type":"Feature","properties":{"NAME":"Appelhaus Woising","HEIGHT":"","ACENT":"","Decent":""},"geometry":{"type":"LineString","coordinates":[[13.4,47.4],[13.41,47.42]]}},
    {"type":"Feature","properties":{"NAME":"Appelhaus Wildgößl","HEIGHT":"","ACENT":"","Decent":""},"geometry":{"type":"LineString","coordinates":[[13.5,47.5],[13.51,47.52]]}},
    {"type":"Feature","properties":{"NAME":"Untersberg","HEIGHT":"","ACENT":"","Decent":""},"geometry":{"type":"LineString","coordinates":[[13.6,47.6],[13.61,47.62]]}},
    {"type":"Feature","properties":{"NAME":"Stauffen","HEIGHT":"","ACENT":"","Decent":""},"geometry":{"type":"LineString","coordinates":[[13.7,47.7],[13.71,47.72]]}},
    {"type":"Feature","properties":{"NAME":"Rettenkogel","HEIGHT":"","ACENT":"","Decent":""},"geometry":{"type":"LineString","coordinates":[[13.8,47.8],[13.81,47.82]]}},
    {"type":"Feature","properties":{"NAME":"Grünstein","HEIGHT":"","ACENT":"","Decent":""},"geometry":{"type":"LineString","coordinates":[[13.9,47.9],[13.91,47.92]]}},
    {"type":"Feature","properties":{"NAME":"Funtenseetauern","HEIGHT":"","ACENT":"","Decent":""},"geometry":{"type":"LineString","coordinates":[[14.0,48.0],[14.01,48.02]]}},
    {"type":"Feature","properties":{"NAME":"Wasseralm Abstieg","HEIGHT":"","ACENT":"","Decent":""},"geometry":{"type":"LineString","coordinates":[[14.1,48.1],[14.11,48.12]]}},
    {"type":"Feature","properties":{"NAME":"Osterhorngruppe","HEIGHT":"","ACENT":"","Decent":""},"geometry":{"type":"LineString","coordinates":[[14.2,48.2],[14.21,48.22]]}},
    {"type":"Feature","properties":{"NAME":"Kleioner Göll","HEIGHT":"","ACENT":"","Decent":""},"geometry":{"type":"LineString","coordinates":[[14.3,48.3],[14.31,48.32]]}},
    {"type":"Feature","properties":{"NAME":"appel","HEIGHT":"","ACENT":"","Decent":""},"geometry":{"type":"LineString","coordinates":[[14.4,48.4],[14.41,48.42]]}},
    {"type":"Feature","properties":{"NAME":"wsefdasoffensee","HEIGHT":"","ACENT":"","Decent":""},"geometry":{"type":"LineString","coordinates":[[14.5,48.5],[14.51,48.52]]}}]}

function getPopupContent(feature) {
    return `
        <div style="
            font-family: Arial, sans-serif;
            line-height: 1.5;
            box-shadow: 15px 15px 20px;
            padding: 15px;
            background-color: #fff;
            border-radius: 5px;
        ">
            <b>Tour:</b> ${feature.properties.NAME}<br>
            <b>Ascent:</b> ${feature.properties.ACENT}<br>
            <b>Descent:</b> ${feature.properties.DECENT}<br>
            <b>Difficulty:</b> ${feature.properties.DIFFICULTY}<br>
            <b>Duration:</b> ${feature.properties.TIME}<br>
            <b>Distance:</b> ${feature.properties.DISTANCE}
        </div>  
    `;
}
var offensee = L.geoJson(offensee_appelhaus, {
    style: mediumstyle,
    onEachFeature: function (feature, layer) {
        // Generate the popup content dynamically
        var popupContent = getPopupContent(feature);
        layer.bindPopup(popupContent); // Bind the styled content to the popup
    }
});




var appel = L.geoJson(appel_ischler, {
    style: mediumstyle,
    onEachFeature: function (feature, layer) {
        var popupContent = getPopupContent(feature);
        layer.bindPopup(popupContent);
    }
});

var kleinergoell = L.geoJson(goell, {
    style: mediumstyle,
    onEachFeature: function (feature, layer) {
        var popupContent = getPopupContent(feature);
        layer.bindPopup(popupContent);
    }
});
var ischlerabstieg = L.geoJson(ischler, {
    style: easystyle,
    onEachFeature: function (feature, layer) {
        var popupContent = getPopupContent(feature);
        layer.bindPopup(popupContent);
    }
});

var rinnkel = L.geoJson(rinnkel, {
    style: mediumstyle,
    onEachFeature: function (feature, layer) {
        var popupContent = getPopupContent(feature);
        layer.bindPopup(popupContent);
    }
});

var anstieg_anniversary = L.geoJson(anstieg, {
    style: easystyle,
    onEachFeature: function (feature, layer) {
        var popupContent = getPopupContent(feature);
        layer.bindPopup(popupContent);
    }
});

var woising_anniversary = L.geoJson(woising, {
    style: easystyle,
    onEachFeature: function (feature, layer) {
        var popupContent = getPopupContent(feature);
        layer.bindPopup(popupContent);
    }
});
var abstiegappel = L.geoJson(abstieg, {
    style: mediumstyle,
    onEachFeature: function (feature, layer) {
        var popupContent = getPopupContent(feature);
        layer.bindPopup(popupContent);
    }
});
var untersberg = L.geoJson(untersberg, {
    style: mediumstyle,
    onEachFeature: function (feature, layer) {
        var popupContent = getPopupContent(feature);
        layer.bindPopup(popupContent);
    }
});
var stauffen = L.geoJson(stauffen, {
    style: mediumstyle,
    onEachFeature: function (feature, layer) {
        var popupContent = getPopupContent(feature);
        layer.bindPopup(popupContent);
    }
});var gruber = L.geoJson(gruber, {
    style: easystyle,
    onEachFeature: function (feature, layer) {
        var popupContent = getPopupContent(feature);
        layer.bindPopup(popupContent);
    }
});
var rettenkogel = L.geoJson(rettenkogel, {
    style: mediumstyle,
    onEachFeature: function (feature, layer) {
        var popupContent = getPopupContent(feature);
        layer.bindPopup(popupContent);
    }
});
var gruenstein = L.geoJson(gruen, {
    style: easystyle,
    onEachFeature: function (feature, layer) {
        var popupContent = getPopupContent(feature);
        layer.bindPopup(popupContent);
    }
});
var funtenseetauern = L.geoJson(funtensee, {
    style: difficultstyle,
    onEachFeature: function (feature, layer) {
        var popupContent = getPopupContent(feature);
        layer.bindPopup(popupContent);
    }
});
var wasseralm_abstieg = L.geoJson(wasseralmabstieg, {
    style: mediumstyle,
    onEachFeature: function (feature, layer) {
        var popupContent = getPopupContent(feature);
        layer.bindPopup(popupContent);
    }
});


offensee.addTo(map);
appel.addTo(map);
rinnkel.addTo(map);
kleinergoell.addTo(map);
ischlerabstieg.addTo(map);
anstieg_anniversary.addTo(map);
woising_anniversary.addTo(map);
abstiegappel.addTo(map);
untersberg.addTo(map);
stauffen.addTo(map);
gruber.addTo(map);
rettenkogel.addTo(map);
gruenstein.addTo(map);
funtenseetauern.addTo(map);
wasseralm_abstieg.addTo(map);


//
//---- Part 5: Adding a layer control for base maps and feature layers
//

//the variable features lists layers that I want to control with the layer control
var features = {
    "appel" : appel,
	"Offensee" : offensee,
    "Rinnkelndensteig" :rinnkel,
    "Abstieg Ischlerhütte" :ischlerabstieg,
    "Backenstein Appelhaus": anstieg_anniversary,
    "Appelhaus Woising":woising_anniversary,
    "Appelhaus Wildgößl": abstiegappel,
    "Untersberg":untersberg,
    "Stauffen":stauffen,
    "Rettenkogel": rettenkogel,
    "Grünstein":gruenstein,
    "Funtenseetauern":funtenseetauern,
    "Wasseralm Abstieg":wasseralm_abstieg,
    "Osterhorngruppe": gruber,
    "Kleioner Göll":kleinergoell
    }


// Function to highlight the feature
function highlightFeature(e) {
    var activeFeature = e.target; // Access the feature being hovered over

    activeFeature.setStyle({
        weight: 5,
        color: '#00FF00', // Green color for highlighting
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        activeFeature.bringToFront();
    }
}


function resetHighlight(e) {
    var layer = e.target; // Access the layer that triggered the event
    if (layer.options.originalStyle) {
        layer.setStyle(layer.options.originalStyle); // Reset to the original style
    }
}

// Function to zoom to the feature when clicked
function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

// Function to store the original style of the layer
function storeOriginalStyle(layer) {
    if (!layer.options.originalStyle) {
        layer.options.originalStyle = { ...layer.options.style }; // Clone the original style
    }
}

// Add interactivity to the features in a GeoJSON layer
function interactiveFunction(feature, layer) {
    storeOriginalStyle(layer); // Store the original style before adding interactions
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

// Array of GeoJSON objects with their respective styles
var geoJsonLayers = [
    { geoJson: offensee, style: mediumstyle },
    { geoJson: appel, style: mediumstyle },
    { geoJson: rinnkel, style: mediumstyle },
    { geoJson: kleinergoell, style: mediumstyle },
    { geoJson: ischlerabstieg, style: easystyle},
    { geoJson: anstieg_anniversary, style:easystyle},
    { geoJson: woising_anniversary, style:easystyle},
    { geoJson: abstiegappel, style: mediumstyle },
    { geoJson: untersberg, style: mediumstyle },
    { geoJson: stauffen, style: mediumstyle},
    { geoJson: gruber, style: easystyle },
    { geoJson: rettenkogel, style: { mediumstyle }},
    { geoJson: gruenstein, style: mediumstyle },
    { geoJson: funtenseetauern, style: difficultstyle },
    { geoJson: wasseralm_abstieg, style: mediumstyle }
];


// Add interactivity and custom styles to all GeoJSON layers
geoJsonLayers.forEach(function (item) {
    var geoJson = item.geoJson;
    var style = item.style;

    geoJson.eachLayer(function (layer) {
        layer.setStyle(style); // Apply the specific style for the feature
        interactiveFunction(null, layer); // Add interactivity to each feature
    });

    geoJson.addTo(map); // Add the GeoJSON layer to the map
});



L.control.layers(baseMaps, features,{position:'bottomright'}).addTo(map);






