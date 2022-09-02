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
  <p>Have a phone call:
    <icon class="icon" icon="phone" />
    <icon icon="filter" />
  </p>
</template>

<style>
.icon {
  color: red;
}

.icon:hover {
  color: seagreen
}
</style>