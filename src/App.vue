<template>
  <div id="app">
    <div class="block w-full h-1 bg-pink-500 fixed top-0 z-50"></div>
    <div
      id="nav"
      class="nav container z-50 relative"
    >
      <!-- <router-link to="/">Home</router-link> -->
      <router-link to="/mandala">Mandala</router-link>
      <!-- <router-link to="/hexagons">Hexagones</router-link> -->
      <router-link to="/leaflet">Leaflet</router-link>
      <router-link to="/circle">Circles</router-link>

    </div>
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
.nav {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @apply mb-4 h-20;
  a {
    @apply mr-2;
  }
}
</style>
