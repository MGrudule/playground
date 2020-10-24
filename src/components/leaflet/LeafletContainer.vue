<template>
  <div class="inline-block">
    <div class="map-nav">
      <h1>Leaflet</h1>
      <div>
        <button
          class="bg-red-500 px-3 py-2 text-white hover:bg-red-600 mb-4 mr-2"
          @click="toggleLayer"
        >
          Toggle map type to {{ isLayer }}
        </button>
        <button
          class="bg-red-500 px-3 py-2 text-white hover:bg-red-600 mb-4 mr-2"
          @click="toggleInteractive"
        >
          {{ isInteractive }}
        </button>
      </div>
      <button
        class="bg-black-900 px-3 py-2 text-white hover:bg-red-600 mr-2"
        @mouseenter="flyTo(coord.usa)"
      >
        USA
      </button>
      <button
        class="bg-black-900 px-3 py-2 text-white hover:bg-red-600 mr-2"
        @mouseenter="flyTo(coord.eu)"
      >
        Europe
      </button>
      <button
        class="bg-black-900 px-3 py-2 text-white hover:bg-red-600 mr-2"
        @mouseenter="flyTo(coord.liminal, 12)"
      >
        Liminal
      </button>
    </div>
    <div class="absolute h-screen w-screen  map-wrapper">
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
      interactive: false,
      layer: "custom",
      coord: {
        usa: [40.737, -73.923],
        eu: [52.519325, 13.392709],
        liminal: [42.891829, 13.754581]
      }
    };
  },
  computed: {
    isInteractive() {
      return this.interactive ? "Turn off interaction" : "Turn on intercation";
    },
    isLayer() {
      return this.layer === "default" ? "B&W " : "Colour";
    }
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
      this.toggleInteractive(true);
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
    toggleInteractive: function(initial) {
      if (initial !== true) {
        this.interactive = !this.interactive;
      }
      this.interactive ? this.enableInteraction() : this.disableInteraction();
    },
    disableInteraction: function() {
      this.map.dragging.disable();
      this.map.touchZoom.disable();
      this.map.doubleClickZoom.disable();
      this.map.scrollWheelZoom.disable();
      this.map.boxZoom.disable();
      this.map.keyboard.disable();
    },
    enableInteraction: function() {
      this.map.dragging.enable();
      this.map.touchZoom.enable();
      this.map.doubleClickZoom.enable();
      this.map.scrollWheelZoom.enable();
      this.map.boxZoom.enable();
      this.map.keyboard.enable();
    },
    flyTo: function(coordinates, zoom) {
      this.map.flyTo(new L.LatLng(...coordinates), zoom ? zoom : this.zoom);
    }
  },
  mounted() {
    this.setupLeafletMap();
  },
  created() {},
  destroyed() {}
};
</script>
<style lang="scss">
.map-nav {
  display: inline-block;
  position: relative;
  z-index: 999;

  &:after {
    @apply bg-white bg-opacity-50 block absolute;
    content: "";
    top: 0;
    left: -2.5rem;
    height: calc(100% + 5rem);
    width: calc(100% + 5rem);
    z-index: -1;
  }
}
.map-wrapper {
  left: 0;
  top: 0;
  z-index: 1;
}
#mapContainer {
  width: 100%;
  height: 100%;
}
</style>
