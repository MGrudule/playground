<template>
  <div class="home container position-relative">
    <div class="page-wrapper">
      <Mandala></Mandala>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Mandala from "@/components/mandala/Mandala.vue";

export default {
  name: "About",
  components: {
    Mandala
  }
};
</script>
