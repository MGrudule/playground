<template>
  <div>
    <h1>Leaflet</h1>
    <div>
      <button
        class="bg-red-500 px-3 py-2 text-white hover:bg-pink-600 mb-4"
        @click="toggleLayer"
      >
        toggle map type
      </button>
    </div>
    <button
      class="bg-black-900 px-3 py-2 text-white hover:bg-pink-600 mr-2"
      @mouseenter="flyTo(coord.usa)"
    >
      USA
    </button>
    <button
      class="bg-black-900 px-3 py-2 text-white hover:bg-pink-600 pr-2"
      @mouseenter="flyTo(coord.eu)"
    >
      Europe
    </button>
    <div class="relative my-5">
      <div id="mapContainer"></div>
    </div>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "components/leaflet/stamen/tile.stamen.js";

export default {
  name: "Leaflet",
  data() {
    return {
      zoom: 4,
      map: "",
      layer: "default",
      coord: {
        usa: [40.737, -73.923],
        eu: [52.519325, 13.392709]
      }
    };
  },
  methods: {
    setupLeafletMap: function() {
      L.Map.include({
        clearLayers: function() {
          this.eachLayer(function(layer) {
            this.removeLayer(layer);
          }, this);
        }
      });
      this.map = L.map("mapContainer", {
        zoomControl: false
      }).setView(this.coord.eu, this.zoom);

      this.setLayer();
    },
    setLayer: function() {
      this.layer === "default" ? this.openStreetLayer() : this.stamenLayer();
    },
    stamenLayer: function() {
      this.map.addLayer(
        new L.StamenTileLayer("toner", {
          detectRetina: true
        })
      );
    },
    openStreetLayer: function() {
      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(this.map);
    },
    toggleLayer: function() {
      this.layer = this.layer === "default" ? "custom" : "default";
      this.map.clearLayers();
      this.setLayer();
    },
    flyTo: function(coordinates) {
      this.map.flyTo(new L.LatLng(...coordinates));
    }
  },
  mounted() {
    this.setupLeafletMap();
  },
  created() {},
  destroyed() {}
};
</script>
<style>
#mapContainer {
  width: 100%;
  height: 50vh;
}
</style>
