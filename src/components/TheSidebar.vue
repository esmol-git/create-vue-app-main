<template>
  <div
    class="text-gray-50 h-full"
    :class="[{ 'w-30': width }, { 'bg-yellow-600': background }]"
  >
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
  width: {
    type: Boolean,
  },
  background: {
    type: Boolean,
  },
});
</script>

<style scoped>
</style>