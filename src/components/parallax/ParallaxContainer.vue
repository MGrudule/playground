<template>
  <div>
    <div class="container pb-10">
      <h1>Prallax</h1>
    </div>

    <div class="p-10">
      <kinesis-container
        :perspective="4000"
        class="container flex justify-center p-5"
      >
        <div
          class="absolute z-20 left-0"
          style="top:50%; left:10%;transform:translate(0%,-50%)"
        >
          <kinesis-element
            type="depth"
            transformOrigin="center center"
            :strength="20"
            class="h-64 w-64 bg-black-900 rounded-full text-white flex justify-center items-center border-white border flex-col shadow-sm"
          >
            <span class="text-2xl">Check me out!</span>
            <span>{{ placeholder }}</span>
          </kinesis-element>
        </div>
        <div
          class="rounded-full overflow-hidden relative"
          style="height:30vw; width:30vw;  box-shadow:inset 0px 0px 20px 10px #424242;"
        >
          <div
            class="rounded-full absolute flex justify-center align-center flex-wrap p-5"
            style="height:35vw; width:35vw; top:-2.5vw;left:-2.5vw"
          >
            <kinesis-element
              v-for="index in 30"
              :key="index"
              :strength="50"
              v-on:mouseenter.native="placeholder = index"
              class="h-16 w-16 bg-black-900 rounded-full my-4 mx-2 flex justify-center items-center hover:bg-green-400 shadow-md"
              >{{ index }}</kinesis-element
            >
          </div>
        </div>
      </kinesis-container>
    </div>
  </div>
</template>

<script>
import { KinesisContainer, KinesisElement } from "vue-kinesis";
export default {
  name: "ParallaxContainer",
  components: { KinesisContainer, KinesisElement },
  data() {
    return {
      placeholder: "Hover over a circle"
    };
  },
  methods: {},
  mounted() {},
  created() {},
  destroyed() {}
};
</script>
<style></style>
