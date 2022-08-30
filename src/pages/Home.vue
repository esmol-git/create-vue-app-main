<script setup lang="ts">
import { ref } from "@vue/reactivity";

const emit = defineEmits(["toggleSidebar"]);

const sidebar = ref(true);

const toggleSidebar = () => {
  //   sidebar.value = !sidebar.value;
  //   console.log(sidebar.value);
  emit("toggleSidebar");
};
</script>

<template>
</template>
