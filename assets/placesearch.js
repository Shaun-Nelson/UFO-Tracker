placeSearch({
  key: "70fdM0ulzAz6u7ykcfFXFUgAkVIzirTB",
  container: document.querySelector("#place-search-input"),
})
  .on("results", (e) => {
    console.log(e);
    for (var i = 0; e.results.length; i++) {
      if (e.results[i].type == "city") {
        var coords = e.results[i].latLng;
        console.log(coords);
        // L.mapquest.map("map", {
        //   center: [coords.lat, coords.lng],
        //   //   layers: L.mapquest.tileLayer("map"),
        //   zoom: 12,
        // });
      }
    }
  })
  .open();
