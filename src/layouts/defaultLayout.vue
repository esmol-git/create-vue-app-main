<template>
  <div class="bg-green-100 h-screen pt-12">
    <the-navbar :isActive="sidebar" />
    <div
      class="main grid h-full"
      :class="sidebar ? 'grid-cols-6' : 'grid-cols-12'"
    >
      <div
        class="
          bg-slate-600
          text-white text-2xl
          grid-span-auto
          transition-all
          grid-flow-row-dense
        "
        :class="sidebar ? 'col-span-1' : 'col-span-1'"
      >
        <the-sidebar :background="true" :width="true" />
      </div>
      <div
        class="content w-full p-5 bg-blue-200 transition-all"
        :class="sidebar ? 'col-span-5' : 'col-span-11'"
      >
        <div class="bg-red-500 h-full rounded-xl p-4">
          <RouterView @toggleSidebar="click" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TheNavbar from "~/components/TheNavbar.vue";
import TheSidebar from "~/components/TheSidebar.vue";

const sidebar = ref(true);

const click = () => {
  sidebar.value = !sidebar.value;
  console.log("hh", sidebar.value);
};
</script>

<style >
.sidebar {
  background-color: blue;
}
</style>