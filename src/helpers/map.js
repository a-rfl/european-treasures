// code for the map

import $ from 'jquery';
import L from 'leaflet';
import {
  forestIcon, lakeIcon, waterfallsIcon, caveIcon, volcanoIcon,
} from './icons';
// import 'leaflet-defaulticon-compatibility';

// creation of the map with mapbox
// and creating the function which will be called once when the page 'section-map' is ready

export const newMap = function () {
  const carte = L.map('osm-map');
  carte.setView([54.79449978441535, 9.43963266779903], 3);
  const myLayer = L.tileLayer(
    'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2FjaXRhayIsImEiOiJja2k3aGdseHozYXA0MnJtcGN2OTd2ZDUyIn0.Qr-b4N32hVs3asnwmfor_g',
    {
      attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'your.mapbox.access.token',
    },
  );
  carte.addLayer(myLayer);

  // extracting data with json server

  $.get('http://localhost:3000/lieux').then((datas) => {
    console.table(datas);

    // creating layers for different groups of places using different markers

    let newIcon = '';
    const markerVolcanoGroup = [];
    const markerLakeGroup = [];
    const markerForestGroup = [];
    const markerCaveGroup = [];
    const markerWaterfallsGroup = [];

    for (const data of datas) {
      if (data.categories[0] === 'volcan') {
        newIcon = volcanoIcon;

        const volcanoMarker = L.marker([data.lon, data.lat], { icon: newIcon });
        volcanoMarker.bindPopup(
          `<div id="${data.nom}"><h6>${data.nom}</h6><img style="width:300px"src="images/${data.images[0]}"><p>Vous voulez en savoir plus</p></div>`,
        );
        markerVolcanoGroup.push(volcanoMarker);
      } else if (data.categories[0] === 'lac') {
        newIcon = lakeIcon;

        const lakeMarker = L.marker([data.lon, data.lat], { icon: newIcon });
        lakeMarker.bindPopup(
          `<div id="${data.nom}"><h6>${data.nom}</h6><img style="width:300px"src="images/${data.images[0]}"><p>Vous voulez en savoir plus</p></div>`,
        );
        markerLakeGroup.push(lakeMarker);
      } else if (data.categories[0] === 'cascade') {
        newIcon = waterfallsIcon;

        const waterfallsMarker = L.marker([data.lon, data.lat], {
          icon: newIcon,
        });
        waterfallsMarker.bindPopup(
          `<div id="${data.nom}"><h6>${data.nom}</h6><img style="width:300px"src="images/${data.images[0]}"><p>Vous voulez en savoir plus</p></div>`,
        );
        markerWaterfallsGroup.push(waterfallsMarker);
      } else if (data.categories[0] === 'grotte') {
        newIcon = caveIcon;

        const caveMarker = L.marker([data.lon, data.lat], {
          icon: newIcon,
        });
        caveMarker.bindPopup(
          `<div id="${data.nom}"><h6>${data.nom}</h6><img style="width:300px"src="images/${data.images[0]}"><p>Vous voulez en savoir plus</p></div>`,
        );
        markerCaveGroup.push(caveMarker);
      } else if (data.categories[0] === 'forêt') {
        newIcon = forestIcon;

        const forestMarker = L.marker([data.lon, data.lat], {
          icon: newIcon,
        });
        forestMarker.bindPopup(
          `<div id="${data.nom}"><h6>${data.nom}</h6><img style="width:300px"src="images/${data.images[0]}"><p>Vous voulez en savoir plus</p></div>`,
        );
        markerForestGroup.push(forestMarker);
      }
    }
    // adding layers to the map

    const volcanoGroup = L.layerGroup(markerVolcanoGroup);
    carte.addLayer(volcanoGroup);
    const lakeGroup = L.layerGroup(markerLakeGroup);
    carte.addLayer(lakeGroup);
    const waterfallsGroup = L.layerGroup(markerWaterfallsGroup);
    carte.addLayer(waterfallsGroup);
    const caveGroup = L.layerGroup(markerCaveGroup);
    carte.addLayer(caveGroup);
    const forestGroup = L.layerGroup(markerForestGroup);
    carte.addLayer(forestGroup);

    // showing or hiding layers by clicking on the legend icon in the document

    document.getElementById('lake').addEventListener('click', () => {
      if (carte.hasLayer(lakeGroup)) {
        carte.removeLayer(lakeGroup);
      } else {
        carte.addLayer(lakeGroup);
      }
    });
    document.getElementById('forest').addEventListener('click', () => {
      if (carte.hasLayer(forestGroup)) {
        carte.removeLayer(forestGroup);
      } else {
        carte.addLayer(forestGroup);
      }
    });
    document.getElementById('waterfalls').addEventListener('click', () => {
      if (carte.hasLayer(waterfallsGroup)) {
        carte.removeLayer(waterfallsGroup);
      } else {
        carte.addLayer(waterfallsGroup);
      }
    });
    document.getElementById('volcano').addEventListener('click', () => {
      if (carte.hasLayer(volcanoGroup)) {
        carte.removeLayer(volcanoGroup);
      } else {
        carte.addLayer(volcanoGroup);
      }
    });
    document.getElementById('cave').addEventListener('click', () => {
      if (carte.hasLayer(caveGroup)) {
        carte.removeLayer(caveGroup);
      } else {
        carte.addLayer(caveGroup);
      }
    });
  });
};
