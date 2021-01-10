<template>
  <div class="home container position-relative">
    <div class="page-wrapper">
      <LeafletContainer></LeafletContainer>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LeafletContainer from "@/components/leaflet/LeafletContainer.vue";

export default {
  name: "Leaflet",
  components: {
    LeafletContainer
  }
};
</script>
