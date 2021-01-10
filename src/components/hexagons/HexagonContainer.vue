<template>
  <div>
    <h1>Hexagones</h1>
    <div class="relative">
      <canvas
        ref="can"
        width="800"
        height="500"
        style="border:1px solid #ccc"
      ></canvas>
    </div>
  </div>
</template>

<script>
import { fabric } from "fabric";
export default {
  name: "HexagonContainer",
  data() {
    return {};
  },
  methods: {},
  mounted() {
    const ref = this.$refs.can;
    const canvas = new fabric.Canvas(ref);

    var counter = 0;
    var edgedetection = 40; //pixels to snap

    let gridX = 51.961524227066334;
    let gridY = 60;
    // for (var i = 0; i < 800 / gridX; i++) {
    //   canvas.add(
    //     new fabric.Line([0, i * gridX, 800, i * gridX], {
    //       stroke: "green",
    //       selectable: false
    //     })
    //   );
    // }
    // for (var j = 0; j < 800 / gridY; j++) {
    //   canvas.add(
    //     new fabric.Line([j * gridY, 0, j * gridY, 500], {
    //       stroke: "blue",
    //       selectable: false
    //     })
    //   );
    // }

    canvas.selection = false;
    plusrect();
    plusrect();
    plusrect();
    plusrect();
    plusrect();
    plusrect();
    plusrect();
    plusrect();
    plusrect();
    plusrect();
    plusrect();
    plusrect();
    function regularPolygonPoints(sideCount, radius) {
      var sweep = (Math.PI * 2) / sideCount;
      var cx = radius;
      var cy = radius;
      var points = [];
      for (var i = 0; i < sideCount; i++) {
        var y = cx + radius * Math.cos(i * sweep);
        var x = cy + radius * Math.sin(i * sweep);
        points.push({ x: x, y: y });
      }
      return points;
    }

    function plusrect() {
      canvas.add(
        new fabric.Polygon(regularPolygonPoints(6, 60), {
          top: 0,
          name: "rectangle " + counter,
          left: 0 + gridX,
          fill:
            "rgba(" +
            Math.floor(Math.random() * 256) +
            "," +
            Math.floor(Math.random() * 256) +
            "," +
            Math.floor(Math.random() * 256) +
            ", 0.75)",
          lockRotation: true,
          hasControls: false,
          hasBorders: false,
          originX: "left",
          originY: "top",
          cornerSize: 15,

          hasRotatingPoint: false,
          perPixelTargetFind: true,
          minScaleLimit: 1,
          maxHeight: 500,
          maxWidth: 800
        })
      );
      counter++;

      gridX = gridX + 51.961524227066334;
      gridY += gridY;
    }

    canvas.on("object:movsing", function(options) {
      let gridX = 103.92304845413267 / 4;
      let gridY = 60 / 4;
      console.log(canvas.getActiveObject());
      options.target.set({
        left: Math.round(options.target.left / gridX) * gridX,
        top: Math.round(options.target.top / gridY) * gridY
      });
    });

    canvas.on("object:moving", function(e) {
      var obj = e.target;
      obj.setCoords(); //Sets corner position coordinates based on current angle, width and height
      canvas.forEachObject(function(targ) {
        let activeObject = canvas.getActiveObject();
        console.log(activeObject.oCoords.tr.corner.tr.x);

        if (targ === activeObject) return;

        if (
          Math.abs(
            activeObject.oCoords.tr.corner.tr.x - targ.oCoords.tl.corner.tl.x
          ) < edgedetection
        ) {
          activeObject.left = targ.left - activeObject.width;
        }
        if (
          Math.abs(
            activeObject.oCoords.tl.corner.tl.x - targ.oCoords.tr.corner.tr.x
          ) < edgedetection
        ) {
          activeObject.left = targ.left + targ.width;
        }
        if (
          Math.abs(
            activeObject.oCoords.br.corner.br.y - targ.oCoords.tr.corner.tr.y
          ) < edgedetection
        ) {
          activeObject.top = targ.top - activeObject.height / 4;
        }
        if (
          Math.abs(
            targ.oCoords.br.corner.br.y - activeObject.oCoords.tr.corner.tr.y
          ) < edgedetection
        ) {
          activeObject.top = targ.top - targ.height / 4;
        }

        if (!activeObject.intersectsWithObject(targ)) {
          activeObject.strokeWidth = 0;
          activeObject.stroke = false;
        }
      });
    });
  },

  created() {},
  destroyed() {}
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
