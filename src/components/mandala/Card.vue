<template>
  <div
    ref="card"
    class="card hover:bg-teal-700 text-black lg:w-48 m-4 lg:m-2"
    :class="card.color"
    :style="cardStyle"
  >{{ card.name }} {{message}}</div>
</template>

<script>
export default {
  name: "Card",
  props: [
    "card",
    "order",
    "grid",
    "nrOfCircles",
    "radius",
    "circleHeight",
    "even",
    "meta"
  ],
  data() {
    return {
      message: ""
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
          borderWidth: "0.2rem"
        };
      else {
        return {
          top: "50%"
        };
      }
    },
    evenOffset() {
      if (this.even && this.meta) return this.circleHeight * 1.2;

      return 0;
    }
  },
  watch: {
    cardStyle() {
      this.sendCoordinates();
    }
  },
  methods: {
    sendCoordinates() {
      let pos = {
        x: this.$refs.card.getBoundingClientRect().top,
        y: this.$refs.card.getBoundingClientRect().left
      };
      this.$emit("setCoordinates", pos);
    },
    getPosX() {
      return this.$refs.card.getBoundingClientRect().left;
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
                (360 / this.nrOfCircles / 180) * (order + offset) * Math.PI
              )
            : -Math.sin(
                (360 / this.nrOfCircles / 180) * (order + offset) * Math.PI
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
        -r *
          Math.cos((360 / this.nrOfCircles / 180) * (order + offset) * Math.PI)
      );
    }
  },
  mounted() {
    this.sendCoordinates();
  }
};
</script>

<style >
.card {
  @apply p-3 flex text-center  border border-dashed border-yellow-500 text-blue-100 h-64 flex justify-evenly;
  flex-direction: column;
  border-width: 2.2rem;
  transition: all 0.2s;
  box-sizing: border-box;
  transform: translate3d(0);
}
.card:hover {
  border-width: 1.4rem;
  @apply border-pink-400 p-6;
}
.card:hover .btn {
  @apply bg-pink-400 text-yellow-500;
}
</style>