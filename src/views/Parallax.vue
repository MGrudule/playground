<template>
  <div class="home position-relative">
    <div class="page-wrapper">
      <ParallaxContainer></ParallaxContainer>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ParallaxContainer from "@/components/parallax/ParallaxContainer.vue";

export default {
  name: "Parallax",
  components: {
    ParallaxContainer
  }
};
</script>
