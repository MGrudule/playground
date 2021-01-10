<template>
  <div>
    <button class="btn my-5 text-teal-700 w-100" @click="toggleGrid">
      toggle grid
    </button>
    <button class="btn my-5 text-teal-700 w-100" @click="toggleMeta">
      toggle meta
    </button>
    {{ adding }}
    <div ref="boxouter" class="box-wrapper">
      <svg
        v-if="adding"
        class="absolute top-0 left-0"
        :height="boxHeight"
        :width="boxHeight"
      >
        <line
          :x1="getX(activePoit)"
          :y1="getY(activePoit)"
          :x2="getX(hoverPoint)"
          :y2="getY(hoverPoint)"
          style="stroke:rgba(255,0,0,0.5);stroke-width:4"
        />
      </svg>
      <transition-group
        tag="svg"
        v-if="grid"
        class="absolute top-0 left-0"
        :height="boxHeight"
        :width="boxHeight"
      >
        <line
          v-for="(edge, index) in pattern"
          :key="`pattern${index}`"
          :x1="getX(edge[0])"
          :y1="getY(edge[0])"
          :x2="getX(edge[1])"
          :y2="getY(edge[1])"
          style="stroke:rgba(0,255,120,0.5);stroke-width:3"
        />
      </transition-group>
      <transition-group
        tag="svg"
        v-if="grid"
        class="absolute top-0 left-0"
        :height="boxHeight"
        :width="boxHeight"
      >
        <line
          v-for="(edge, index) in edges"
          :key="`edge${index}`"
          :x1="getX(edge[0])"
          :y1="getY(edge[0])"
          :x2="getX(edge[1])"
          :y2="getY(edge[1])"
          style="stroke:rgba(0,0,0,0.5);stroke-width:1"
        />
      </transition-group>

      <transition-group
        tag="div"
        class="flex align-top justify-center md:justify-between flex-wrap z-10 relative"
        :style="{ height: boxHeight + 'px' }"
      >
        <card
          v-for="(circle, index) in circles"
          :nrOfCircles="circles.length"
          :card="circle"
          :circleHeight="circleHeight"
          :order="index"
          :radius="radius"
          :even="index % 2 == 1"
          :grid="grid"
          :meta="meta"
          :key="circle.id"
          @setCoordinates="setCoordinates($event, circle.id)"
          @add-point="addPoint(circle.id)"
          @add-hover="addHover(circle.id)"
        ></card>
      </transition-group>
    </div>
  </div>
</template>

<script>
import card from "@/components/mandala/Card.vue";
export default {
  metaInfo: {
    title: "Mandala"
  },
  components: { card },
  data() {
    return {
      grid: false,
      meta: false,
      contHeight: 0,
      circleHeight: 0,
      boxHeight: 0,
      radius: 0,
      adding: false,
      activePoit: [],
      hoverPoint: [],
      pattern: [],
      edges: [],
      vertices: {},
      verticesPoints: [],
      circles: [
        {
          id: 1,
          name: "Worldview",
          keywords: "lorem",
          color: "bg-white text-green-900"
        },
        {
          id: 2,
          name: "Wellbeing",
          keywords: "lorem",
          color: "bg-yellow-500 text-green-900"
        },
        {
          id: 3,
          name: "Food",
          keywords: "lorem",
          color: "bg-black-900 border-white"
        },
        { id: 4, name: "Trade", keywords: "lorem", color: "bg-orange-300" },
        { id: 5, name: "Energy", keywords: "lorem", color: "bg-orange-500" },
        { id: 6, name: "Climate", keywords: "lorem", color: "bg-blue-500" },
        { id: 7, name: "Biosphere", keywords: "lorem", color: "bg-green-500" },
        { id: 8, name: "Water", keywords: "lorem", color: "bg-teal-500" },
        { id: 9, name: "Habitat", keywords: "lorem", color: "bg-gray-500" },
        { id: 10, name: "Wealth", keywords: "lorem", color: "bg-red-500" },
        {
          id: 11,
          name: "Governance",
          keywords: "lorem",
          color: "bg-yellow-700"
        },
        { id: 12, name: "Community", keywords: "lorem", color: "bg-purple-500" }
      ]
    };
  },
  computed: {
    edgeCount() {
      let n = this.circles.length;
      return (n / 2) * (n - 1);
    },
    nodeList() {
      let nodes = [];
      this.circles.forEach(element => {
        nodes.push(element.id);
      });
      return nodes;
    }
  },
  methods: {
    addHover(id) {
      if (this.adding) this.hoverPoint = id;
    },
    addPoint(id) {
      this.adding = !this.adding;
      if (this.adding) {
        this.activePoit = id;
      } else {
        this.pattern.push([this.activePoit, id]);
      }
    },
    setCoordinates(points, id) {
      this.vertices[id] = points;
      this.$forceUpdate();
    },
    getX(id) {
      return this.vertices[id].x;
    },
    getY(id) {
      return this.vertices[id].y;
    },
    getEdges() {
      let edgeList = [];
      let n = this.nodeList.length;
      if (n > 0) {
        let nodeList = [...this.nodeList];
        for (let i = 0; i < n; i++) {
          nodeList.shift(); //remove
          for (let j = 0; j < nodeList.length; j++) {
            edgeList.push([this.nodeList[i], nodeList[j]]);
          }
        }
      }
      this.edges = edgeList;
    },
    toggleGrid() {
      this.grid = !this.grid;
    },
    toggleMeta() {
      this.meta = !this.meta;
    },
    matchHeight() {
      this.contHeight = this.$refs.boxouter.clientWidth;
      this.boxHeight = this.contHeight;
      this.circleHeight = this.contHeight / 7;
      this.radius = (this.contHeight - 2 * this.circleHeight) / 2;
    },
    handleResize() {
      this.matchHeight();
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.matchHeight();
      this.getEdges(this.nodeList.length);
    });
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  }
};
</script>
<style>
.box-wrapper {
  position: relative;
  display: block;
  overflow: hidden;
  transform: translate3d(0);
}
.box {
  transform: translate(-50%, -50%);
  position: absolute;
  left: 50%;
  top: 50%;
}
</style>
