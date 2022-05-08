<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" class="inline">
  </div>
  <div class="flex justify-center gap-x-4">
    <router-link class="underline hover:text-indigo-500" to="/testCenter">testCenter</router-link>
    <router-link class="underline hover:text-indigo-500" to="/testCenterSingle">testCenterSingle</router-link>
  </div>
  <router-view></router-view>
</template>

<script setup lang="ts">
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  flex-direction: column;
}
</style>
