<template>
  <div class="container pb-10">
    <div class="relative">
      <div
        class="h-20 w-20 rounded-full border border-gray-700 top-0 absolute bg-blue-500 opacity-50"
        v-anime="{
          translateX: '1.25rem',
          duration: duration,
          loop: true,
          direction: 'alternate',
          easing: easing,
          delay: 200,
        }"
      ></div>
      <div
        class="h-20 w-20 rounded-full border border-gray-700 top-0 absolute bg-white z-30"
        style="left: 0rem; transform-origin: 50%50%"
        v-anime="{
          scale: '0.5',
          duration: duration,
          loop: true,
          direction: 'alternate',
          delay: 200,

          easing: easing,
        }"
      ></div>
      <div
        class="h-20 w-20 rounded-full border border-gray-700 top-0 absolute bg-blue-500 opacity-50"
        v-anime="{
          translateX: '-1.25rem',
          duration: duration,
          loop: true,
          direction: 'alternate',
          delay: 200,
          easing: easing,
        }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      easing: "cubicBezier(0.645, 0.045, 0.355, 1.000)",
      duration: 7000,
    };
  },
  mounted() {
    // const targets = this.$el;
    // this.$anime
    //   .timeline()
    //   .add({
    //     targets,
    //     translateX: 250,
    //     easing: "easeOutExpo",
    //   })
    //   .add({
    //     targets,
    //     translateX: 250,
    //     easing: "easeOutExpo",
    //   });
  },
};
</script>

<style>
.gradient-blue {
  background-image: linear-gradient(#13547a, #80d0c7);
}
</style>