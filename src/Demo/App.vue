<template>
  <v-region :region="LEFT_OVERLAY_REGION" />
  <router-view> </router-view>
  <v-region :region="RIGHT_DYNAMIC_CONTENT" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { LEFT_OVERLAY_REGION , RIGHT_DYNAMIC_CONTENT } from "./RegionNames";

export default defineComponent({
  name: "App",
});
</script>