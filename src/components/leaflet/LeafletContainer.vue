<template>
  <div>
    <h1>Leaflet</h1>
    <div class="relative">
      <div id="mapContainer"></div>
    </div>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
export default {
  name: "Leaflet",
  data() {
    return {
      latLong: [52.519325, 13.392709],
      zoom: 4
    };
  },
  methods: {
    setupLeafletMap: function() {
      const mapDiv = L.map("mapContainer").setView(this.latLong, this.zoom);
      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(mapDiv);
    }
  },
  mounted() {
    this.setupLeafletMap();
  },
  created() {},
  destroyed() {}
};
</script>
<style >
#mapContainer {
  width: 100%;
  height: 50vh;
}
</style>
