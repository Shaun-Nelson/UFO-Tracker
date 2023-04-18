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
            primaryColor: "#004d40",
            size: "md",
            symbol: "o",
          });
        } else if (sighting.shape === "cylinder") {
          iconType = L.mapquest.icons.marker({
            primaryColor: "#26a69a",
            size: "md",
            symbol: "0",
          });
        } else if (sighting.shape === "formation") {
          iconType = L.mapquest.icons.marker({
            primaryColor: "#b2dfdb",
            size: "md",
            symbol: "f",
          });
        } else if (sighting.shape === "disk") {
          iconType = L.mapquest.icons.marker({
            primaryColor: "#827717",
            size: "md",
            symbol: "D",
          });
        } else if (sighting.shape === "star") {
          iconType = L.mapquest.icons.marker({
            primaryColor: "#cddc39",
            size: "md",
            symbol: "S",
          });
        } else if (sighting.shape === "oval") {
          iconType = L.mapquest.icons.marker({
            primaryColor: "#00c853",
            size: "md",
            symbol: "O",
          });
        } else if (sighting.shape === "unknown") {
          iconType = L.mapquest.icons.marker({
            primaryColor: "#b9f6ca",
            size: "md",
            symbol: "U",
          });
        } else if (sighting.shape === "circle") {
          iconType = L.mapquest.icons.marker({
            primaryColor: "#f57f17",
            size: "md",
            symbol: "1",
          });
        } else if (sighting.shape === "light") {
          iconType = L.mapquest.icons.marker({
            primaryColor: "#ffeb3b",
            size: "md",
            symbol: "L",
          });
        } else if (sighting.shape === "fireball") {
          iconType = L.mapquest.icons.marker({
            primaryColor: "#fff9c4",
            size: "md",
            symbol: "F",
          });
        } else if (sighting.shape === "rectangle") {
          iconType = L.mapquest.icons.marker({
            primaryColor: "#bf360c",
            size: "md",
            symbol: "R",
          });
        } else if (sighting.shape === "triangle") {
          iconType = L.mapquest.icons.marker({
            primaryColor: "#ff5722",
            size: "md",
            symbol: "4",
          });
        } else if (sighting.shape === "changing") {
          iconType = L.mapquest.icons.marker({
            primaryColor: "#ffab91",
            size: "md",
            symbol: "x",
          });
        } else if (sighting.shape === "oval") {
          iconType = L.mapquest.icons.marker({
            primaryColor: "#311b92",
            size: "md",
            symbol: "2",
          });
        } else if (sighting.shape === "egg") {
          iconType = L.mapquest.icons.marker({
            primaryColor: "#673ab7",
            size: "md",
            symbol: "E",
          });
        } else if (sighting.shape === "sphere") {
          iconType = L.mapquest.icons.marker({
            primaryColor: "#b39ddb",
            size: "md",
            symbol: "S",
          });
        } else if (sighting.shape === "diamond") {
          iconType = L.mapquest.icons.marker({
            primaryColor: "#880e4f",
            size: "md",
            symbol: "d",
          });
        } else if (sighting.shape === "cone") {
          iconType = L.mapquest.icons.marker({
            primaryColor: "#e91e63",
            size: "md",
            symbol: "3",
          });
        } else if (sighting.shape === "teardrop") {
          iconType = L.mapquest.icons.marker({
            primaryColor: "#f48fb1",
            size: "md",
            symbol: "T",
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
