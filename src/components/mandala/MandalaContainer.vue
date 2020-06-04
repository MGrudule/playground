<template>
  <div>
    <button class="btn my-5 text-teal-700 w-100" @click="toggleGrid">toggle grid</button>
    <button class="btn my-5 text-teal-700 w-100" @click="toggleMeta">toggle meta</button>
    <div ref="boxouter" class="box-wrapper">
      <svg v-if="grid" class="absolute top-0 left-0" :height="boxHeight" :width="boxHeight">
        <line
          v-for="(edge, index) in edges"
          :key="`edge${index}`"
          :x1="vertices[edge[0]].x"
          :y1="vertices[edge[0]].y"
          :x2="vertices[edge[1]].x"
          :y2="vertices[edge[1]].y"
          style="stroke:rgba(0,0,0,0.1);stroke-width:1"
        />
      </svg>

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
          :even="index%2 == 1"
          :grid="grid"
          :meta="meta"
          :key="circle.id"
          @setCoordinates="setCoordinates($event, circle.id)"
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
      edges: [],
      vertices: {},
      verticesPoints: [],
      circles: [
        { id: 1, name: "Worldview", keywords: "lorem", color: "bg-white" },
        { id: 2, name: "Wellbeing", keywords: "lorem", color: "bg-yellow-500" },
        { id: 3, name: "Food", keywords: "lorem", color: "bg-orange-800" },
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
    setCoordinates(points, id) {
      this.vertices[id] = points;
      this.$forceUpdate();
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
<style >
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
