<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";

const emit = defineEmits(["toggleSidebar"]);

const route = useRoute();
const sidebar = ref(true);

const toggleSidebar = () => {
  //   sidebar.value = !sidebar.value;
  //   console.log(sidebar.value);
  emit("toggleSidebar");
};
</script>

<template>
  <h1 class="text-3xl text-gray-200 font-bold">{{ route.name }}</h1>
  <button @click="toggleSidebar">Toggle sidebar</button>
</template>
