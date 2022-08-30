<template>
  <!-- Static sidebar for desktop -->
  <div :class="[isActive ? 'md:w-64' : 'md:w-14', ' hidden md:flex md:flex-col md:fixed md:inset-y-0 transition-all']">
    <!-- Sidebar component, swap this element with another sidebar if you like -->
    <div class="flex flex-col flex-grow border-r border-gray-200 pt-5 bg-white  ">
      <div class="flex items-center flex-shrink-0 px-4">
        <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
          alt="Workflow" />
      </div>
      <div class="mt-5 flex-grow flex flex-col">
        <nav class="flex-1 px-2 pb-4 space-y-1">
          <router-link v-for="item in navigation" :key="item.name" :to="item.to"
            :class="['text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']">
            <component :is="item.icon"
              :class="[isActive ? 'mr-3 text-red-400' : '', 'text-gray-400 group-hover:text-gray-900 flex-shrink-0 h-6 w-6']"
              aria-hidden="true" />
            <span v-show="isActive"> {{  item.name  }}</span>
          </router-link>
        </nav>
      </div>
      <div class="flex items-center justify-center px-2 py-2 text-sm font-medium rounded-md" @click="toggleSidebar">
        <svg :class="[isActive ? 'px-4' : 'rotate-180 ', 'h-6 transition-all cursor-pointer']" fill="none"
          stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
} from '@heroicons/vue/outline'

const props = defineProps({
  isActive: {
    type: Boolean,
    default: true,
  },
  width: {
    type: Boolean,
  },
  background: {
    type: Boolean,
  },
});

const navigation = ref([
  { name: 'Home', to: '/', icon: HomeIcon },
  { name: 'About', to: '/about', icon: ChartBarIcon }
])
// const props = defineProps<{
//   isActive: boolean
//   width?: boolean
//   background: boolean
// }>()
const emit = defineEmits(["toggleSidebar"]);


const toggleSidebar = () => {
  //   sidebar.value = !sidebar.value;
  //   console.log(sidebar.value);
  emit("toggleSidebar");
};
</script>

<style scoped>
.router-link-exact-active {
  @apply bg-gray-100 text-gray-900
}

.router-link-exact-active svg {
  @apply text-gray-900
}
</style>