<template>
  <div class="container">
    <div class=" flex flex-wrap">
      <circle-group
        classLeft="hidden"
        classRight="hidden"
        classTop="hidden"
        classBottom="hidden"
        classCenter="border border-gray-700"
      >
      </circle-group>

      <circle-group
        classLeft="border border-gray-700"
        classRight="border border-gray-700"
        classTop="hidden"
        classBottom="hidden"
        classCenter="border border-gray-700"
      >
      </circle-group>

      <circle-group
        classLeft="border border-gray-700"
        classRight="border border-gray-700"
        classTop="border border-gray-700"
        classBottom="hidden"
        classCenter="border border-gray-700"
      >
      </circle-group>
      <circle-group>
      </circle-group>
    </div>

    <div class="flex flex-wrap isolate">
      <circle-group
        classTop="bg-blue-500 z-20 blend-screen"
        classBottom="bg-blue-500 blend-screen"
        classLeft="hidden"
        classRight="hidden"
        classCenter="bg-white z-30"
      >
      </circle-group>

      <circle-group
        classLeft="bg-blue-500 z-20 blend-lumin "
        classRight="bg-teal-500 blend-lumin"
        classTop="hidden"
        classBottom="hidden"
        classCenter="bg-white z-30"
      >
      </circle-group>
      <circle-group
        classLeft="bg-blue-500 z-20 blend-screen "
        classRight="bg-blue-400 blend-screen"
        classTop="bg-teal-400 z-30 blend-screen"
        classBottom="hidden"
        classCenter="bg-white z-40"
      >
      </circle-group>

      <circle-group
        classLeft="bg-blue-500 z-20 blend-screen "
        classRight="bg-blue-400 blend-screen"
        classTop="bg-teal-400 z-30 blend-screen"
        classBottom="bg-teal-500 z-30 blend-screen"
        classCenter="bg-white z-40"
      >
      </circle-group>
    </div>
  </div>
</template>

<script>
import CircleGroup from "./CircleGroup.vue";

export default {
  components: { CircleGroup },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.blend-screen {
  mix-blend-mode: screen;
}
.blend-lumin {
  mix-blend-mode: color-dodge;
}
.isolate {
  isolation: isolate;
}
</style>
