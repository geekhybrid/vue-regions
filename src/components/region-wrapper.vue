<template>
    <div v-region="region"></div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";


export default defineComponent({
    props: {
        region: {
            type: String,
            required: true,
        }
    }
})
</script>