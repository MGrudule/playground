<template>
  <div :class="classWrapper">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 242 209"
      fill="none"
      class="triangle"
    >
      <path d="M1.4617 207.7L120.8 1L240.138 207.7H1.4617Z" />
    </svg>
    <div class="circle-wrapper">
      <div class="circle-group">

        <div
          class="circle-left"
          :class="`${classLeft} ${circleClass}`"
        ></div>
        <div
          class="circle-bottom"
          :class="`${classBottom} ${circleClass}`"
        ></div>
        <div
          class="circle-center"
          :class="`${classCenter} ${circleClass}`"
        ></div>
        <div
          class="circle-top"
          :class="`${classTop} ${circleClass}`"
        ></div>
        <div
          class="circle-right"
          :class="`${classRight} ${circleClass}`"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    duration: {
      default: 5000,
    },
    easing: {
      default: "cubicBezier(0.250, 0.460, 0.450, 0.940)",
    },
    classWrapper: {
      default: "relative block w-40 h-40 m-5 ",
    },
    classTop: {
      default: "border border-gray-700",
    },
    classBottom: {
      default: "border border-gray-700",
    },
    classLeft: {
      default: "border border-gray-700",
    },
    classRight: {
      default: "border border-gray-700",
    },
    classCenter: {
      default: "border border-gray-700",
    },
    classTriange: {
      default: "border border-gray-700",
    },
  },
  data() {
    return {
      circleClass: "d-circle rounded-full top-0 absolute  ",
    };
  },
  methods: {
    animate() {
      const left = ".circle-left";
      const right = ".circle-right";
      const center = ".circle-center";
      const top = ".circle-top";
      const bottom = ".circle-bottom";
      this.$anime
        .timeline({
          easing: this.easing,
          duration: this.duration,
          loop: true,
          delay: 200,
          direction: "alternate",
        })
        .add(
          {
            targets: left,
            translateX: "-1.25rem",
          },
          0
        )
        .add(
          {
            targets: right,
            translateX: "1.25rem",
          },
          0
        )
        .add(
          {
            targets: bottom,
            translateY: "1.25rem",
          },
          0
        )
        .add(
          {
            targets: top,
            translateY: "-1.25rem",
          },
          0
        )
        .add(
          {
            targets: center,
            scale: "0.5",
          },
          0
        );
    },
  },
  mounted() {
    this.animate();
  },
};
</script>

<style >
.d-circle {
  width: 50%;
  height: 50%;
  transform-origin: top center;
}
.circle-center {
  transform-origin: center center;
}
.circle-wrapper {
  position: absolute;
  width: inherit;
  height: inherit;
  left: 50%;
  bottom: 0;
  transform: translate(-25%, 50%);
}
.circle-group {
  width: inherit;
  height: inherit;
  position: relative;
}
.triangle {
  height: 100%;
  width: 97%;
  top: 1rem;
  left: 1.5%;
  position: absolute;
  z-index: 99;
  fill: none;
  stroke: black;
  opacity: 0.3;
  stroke-width: 0.5;
}
</style>