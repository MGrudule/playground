<template>
  <div>
    <button
      class="btn my-5 text-teal-700 w-100 p-2 border-teal-700 border-2 hover:text-white hover:bg-teal-700"
      @click="togglemandalaView"
    >
      {{ viewButtonText }}
    </button>

    <!-- <button class="btn my-5 text-teal-700 w-100" @click="toggleMeta">
      toggle meta
    </button> -->

    <div ref="boxouter" class="box-wrapper">
      <div v-if="mandalaView">
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
            style="stroke: rgba(255, 0, 0, 0.5); stroke-width: 4"
          />
        </svg>
      </div>
      <transition-group
        tag="svg"
        v-if="mandalaView"
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
          style="stroke: rgba(0, 255, 120, 0.5); stroke-width: 3"
        />
      </transition-group>
      <transition-group
        tag="svg"
        v-if="mandalaView"
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
          style="stroke: rgba(0, 0, 0, 0.5); stroke-width: 1"
        />
      </transition-group>

      <transition-group
        tag="div"
        class="flex align-top justify-center md:justify-between flex-wrap z-10 relative"
        :style="{ height: boxHeight + 'px' }"
      >
        <card
          v-for="(node, index) in nodes"
          :nrOfNodes="nodes.length"
          :node="node"
          :circleHeight="circleHeight"
          :order="index"
          :radius="radius"
          :even="index % 2 == 1"
          :mandalaView="mandalaView"
          :meta="meta"
          :key="node.id"
          @setCoordinates="setCoordinates($event, node.id)"
          @add-point="addPoint(node.id)"
          @add-hover="addHover(node.id)"
        ></card>
      </transition-group>
    </div>
  </div>
</template>

<script>
import card from "@/components/mandala/Card.vue";
import mandalaData from "@/data/mandala.json";
export default {
  metaInfo: {
    title: "Mandala",
  },
  components: { card },
  data() {
    return {
      mandalaView: true,
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
      nodes: [],
    };
  },
  computed: {
    viewButtonText() {
      return this.mandalaView ? "Show list view" : "Show mandala view";
    },
    edgeCount() {
      let n = this.nodes.length;
      return (n / 2) * (n - 1);
    },
    nodeList() {
      let nodes = [];
      this.nodes.forEach((element) => {
        nodes.push(element.id);
      });
      return nodes;
    },
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
    togglemandalaView() {
      this.mandalaView = !this.mandalaView;
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
    },
  },
  mounted() {
    this.nodes = mandalaData;
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
  },
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
