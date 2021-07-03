<template>
  <div class="home position-relative">
    <div class="page-wrapper">
      <Duality></Duality>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Duality from "@/components/circles/Duality.vue";

export default {
  name: "Circles",
  components: {
    Duality,
  },
};
</script>
