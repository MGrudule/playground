<template>
  <div class="home container position-relative">
    <div class="page-wrapper">
      <HexagonContainer></HexagonContainer>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HexagonContainer from "@/components/hexagons/HexagonContainer.vue";

export default {
  name: "Hexagons",
  components: {
    HexagonContainer
  }
};
</script>
