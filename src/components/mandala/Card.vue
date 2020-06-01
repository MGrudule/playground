<template>
  <div
    class="card hover:bg-teal-700 text-black lg:w-48 m-4 lg:m-2"
    :class="card.color"
    :style="cardStyle"
  >
    {{ card.name }} {{message}}
    <!-- <button
      @click="onClick"
      class="btn bg-yellow-500 text-blue-500 p-2 uppercase text-yellow-500"
    >ADD</button>-->
  </div>
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
  methods: {
    onClick() {
      this.message = "✔️";
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