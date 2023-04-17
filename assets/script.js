var map;
window.onload = function () {
  fetch("./assets/sightings.json")
    .then((response) => response.json())
    .then((data) => {
      var apiKey = "70fdM0ulzAz6u7ykcfFXFUgAkVIzirTB";

      L.mapquest.key = apiKey;
      map = L.mapquest.map("map", {
        center: [43.6532, -79.2832],
        layers: L.mapquest.tileLayer("map"),
        zoom: 12,
      });
      data.forEach((sighting) => {
        var iconType;
        console.log(sighting.shape);
        if (sighting.shape === "cigar") {
          iconType = L.mapquest.icons.marker({
            primaryColor: "#01579b",
            size: "md",
            symbol: "c",
          });
        } else if (sighting.shape === "cross") {
          iconType = L.mapquest.icons.marker({
            primaryColor: "#29b6f6",
            size: "md",
            symbol: "C",
          });
        } else if (sighting.shape === "other") {
          iconType = L.mapquest.icons.marker({
            primaryColor: "#FFFFFF",
            size: "md",
            symbol: "o",
          });
        } else {
          iconType = L.mapquest.icons.marker();
        }
        L.marker([sighting.city_latitude, sighting.city_longitude], {
          icon: iconType,
          draggable: false,
        })
          .bindPopup(
            `<b>Date:</b> ${sighting.date_time}<br><b>Description:</b> ${sighting.text}`
          )
          .addTo(map);
      });
    });
};
