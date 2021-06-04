<template>
  <img alt="Vue logo" src="./Demo/assets/logo.png" v-region="'logo'" />
  <div v-region="'content'"></div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted } from "vue";
import { RegionManager } from "./@types/types";
import HelloWorld from "./Demo/components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  setup() {
    onMounted(() => {
      const instance = getCurrentInstance();
      const regionManager = instance?.appContext
        .config
        .globalProperties
        .$regionManager as RegionManager;
        
      regionManager.mount("content", HelloWorld);
    });
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
