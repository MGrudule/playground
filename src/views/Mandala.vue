<template>
  <div class="home container position-relative">
    <div class="page-wrapper">
      <MandalaContainer></MandalaContainer>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MandalaContainer from "@/components/mandala/MandalaContainer.vue";

export default {
  name: "Mandala",
  components: {
    MandalaContainer
  }
};
</script>
