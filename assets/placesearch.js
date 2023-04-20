var ps = placeSearch({
  key: "70fdM0ulzAz6u7ykcfFXFUgAkVIzirTB",
  container: document.querySelector("#place-search-input"),
  collection: ["poi", "airport", "address", "adminArea"],
});

let markers = [];

ps.on("change", (e) => {
  markers.forEach(function (marker, markerIndex) {
    if (markerIndex === e.resultIndex) {
      markers = [marker];
      marker.setOpacity(1);
      map.setView(e.result.latlng, 11);
    } else {
      removeMarker(marker);
    }
  });
});

ps.on("results", (e) => {
  markers.forEach(removeMarker);
  markers = [];

  if (e.results.length === 0) {
    map.setView(new L.LatLng(0, 0), 2);
    return;
  }

  e.results.forEach(addMarker);
  findBestZoom();
});

ps.on("cursorchanged", (e) => {
  markers.forEach(function (marker, markerIndex) {
    if (markerIndex === e.resultIndex) {
      marker.setOpacity(1);
      marker.setZIndexOffset(1000);
    } else {
      marker.setZIndexOffset(0);
      marker.setOpacity(0.5);
    }
  });
});

ps.on("clear", () => {
  console.log("cleared");
  map.setView(new L.LatLng(0, 0), 2);
  markers.forEach(removeMarker);
});

ps.on("error", (e) => {
  console.log(e);
});

function addMarker(result) {
  let marker = L.marker(result.latlng, { opacity: 0.4 });
  marker.addTo(map);
  markers.push(marker);
}

function removeMarker(marker) {
  map.removeLayer(marker);
}

function findBestZoom() {
  let featureGroup = L.featureGroup(markers);
  map.fitBounds(featureGroup.getBounds().pad(0.5), { animate: false });
}
