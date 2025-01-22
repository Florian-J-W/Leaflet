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


var easyGroup = L.layerGroup();
var mediumGroup = L.layerGroup();
var hardGroup = L.layerGroup();

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


offensee.addTo(mediumGroup);
appel.addTo(mediumGroup);
rinnkel.addTo(mediumGroup);
kleinergoell.addTo(mediumGroup);
ischlerabstieg.addTo(easyGroup);
anstieg_anniversary.addTo(easyGroup);
woising_anniversary.addTo(easyGroup);
abstiegappel.addTo(mediumGroup);
untersberg.addTo(mediumGroup);
stauffen.addTo(mediumGroup);
gruber.addTo(easyGroup);
rettenkogel.addTo(mediumGroup);
gruenstein.addTo(mediumGroup);
funtenseetauern.addTo(hardGroup);
wasseralm_abstieg.addTo(mediumGroup);

easyGroup.addTo(map);
mediumGroup.addTo(map);
hardGroup.addTo(map);

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
    "Kleiner Göll":kleinergoell
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
    { geoJson: gruenstein, style: easystyle },
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


easyGroup.addTo(map);
mediumGroup.addTo(map);
hardGroup.addTo(map); // Add only if you want "Hard" shown by default

var overlays = {
    "Easy": easyGroup,
    "Medium": mediumGroup,
    "Hard": hardGroup
  };

// Create a custom Leaflet control to serve as our legend
var legend = L.control({ position: "bottomright" });

legend.onAdd = function (map) {
  // Create a <div> element with the class "info legend"
  var div = L.DomUtil.create("div", "info legend");

  // Define the difficulties and their corresponding color
  var difficulties = [
    { label: "Easy", color: "#009000" },    // Green
    { label: "Medium", color: "#ffff00" },  // Yellow
    { label: "Difficult", color: "#ff0000" } // Red
  ];

  // Construct HTML for each difficulty
  difficulties.forEach(function (diff) {
    // "i" will be our color box (inline styled background)
    div.innerHTML +=
      `<i style="background: ${diff.color}; width: 20px; height: 15px; 
                 float: left; margin-right: 15px; opacity: 2;"></i>
       <span>${diff.label}</span><br>`;
  });

  return div;
};

// Finally, add the legend to your map
legend.addTo(map);

L.control.layers(baseMaps, overlays,{position:'topright'}).addTo(map);






