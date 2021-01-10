<template>
  <div
    ref="card"
    class="card hover:bg-teal-700 lg:w-48 m-4 lg:m-2 text-white font-bold border border-dashed border-black-900"
    :class="node.color"
    :style="cardStyle"
    @click="$emit('add-point')"
    @mouseenter="$emit('add-hover')"
  >
    {{ node.name }} {{ message }}
  </div>
</template>

<script>
export default {
  name: "Card",
  props: [
    "node",
    "order",
    "grid",
    "nrOfNodes",
    "radius",
    "circleHeight",
    "even",
    "meta",
  ],
  data() {
    return {
      message: "",
    };
  },
  computed: {
    cardStyle() {
      if (this.grid)
        return {
          position: "absolute",
          left:
            String(
              this.getX(this.order, this.radius, true, 0) + this.evenOffset
            ) + "px",
          top:
            String(
              this.getY(this.order, this.radius, true, 0) + this.evenOffset
            ) + "px",
          borderRadius: "100%",
          height: String(this.circleHeight) + "px",
          width: String(this.circleHeight) + "px",
          borderWidth: "3px",
        };
      else {
        return {
          top: "50%",
        };
      }
    },
    evenOffset() {
      if (this.even && this.meta) return this.circleHeight * 1.2;

      return 0;
    },
  },
  watch: {
    cardStyle() {
      this.sendCoordinates();
    },
  },
  methods: {
    sendCoordinates() {
      let pos = {
        x:
          this.getX(this.order, this.radius - this.circleHeight / 2, true, 0) +
          this.evenOffset +
          this.circleHeight +
          6,
        y:
          this.getY(this.order, this.radius - this.circleHeight / 2, true, 0) +
          this.evenOffset +
          this.circleHeight +
          6,
      };

      this.$emit("setCoordinates", pos);
    },
    getX(order, r, clockwise, offset) {
      if (this.even && this.meta) {
        r = r - this.circleHeight * 1.2;
        offset = -1;
      }
      return (
        r +
        r *
          (clockwise
            ? Math.sin(
                (360 / this.nrOfNodes / 180) * (order + offset) * Math.PI
              )
            : -Math.sin(
                (360 / this.nrOfNodes / 180) * (order + offset) * Math.PI
              ))
      );
    },
    getY(order, r, clockwise, offset) {
      if (this.even && this.meta) {
        r = r - this.circleHeight * 1.2;
        offset = -1;
      }
      return (
        r +
        -r * Math.cos((360 / this.nrOfNodes / 180) * (order + offset) * Math.PI)
      );
    },
  },
  mounted() {
    this.sendCoordinates();
  },
};
</script>

<style>
.card {
  @apply p-3 text-center h-64 flex justify-evenly;
  flex-direction: column;
  border-width: 2.2rem;
  transition: border-width 0.3s cubic-bezier(0.75, -1, 0, 1.75),
    background-color 0.1s ease-in, left 0.2s, right 0.2s, top 0.2s, bottom 0.2s;
  box-sizing: border-box;
  transform: translate3d(0);
  max-height: 12rem;
  cursor: pointer;
}
.card:hover {
  border-width: 1.4rem;
  @apply border-green-400 p-6 bg-black-900 text-white;
}
.card:hover .btn {
  @apply bg-pink-400 text-yellow-500;
}
</style>
