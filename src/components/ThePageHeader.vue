<template>
    <h1 class="text-2xl font-semibold text-gray-900">{{  route.name  }}</h1>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<style scoped>
</style>