<script setup lang="ts">
import { SidebarMenu } from "vue-sidebar-menu";
import { ref } from "vue";
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
} from "@heroicons/vue/outline";


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
const menu = ref([
  {
    header: "Main Navigation",
    hiddenOnCollapse: true,
  },
  {
    href: { path: "/" },
    title: "Dashboard",
    // icon: 'fa fa-filter',
    icon: {
      element: "icon",
      class: "icon",
      attributes: { icon: "fa-filter" },
      text: "",
    },
  },
  {
    title: "Charts",
    icon: "filter",
    child: [
      {
        href: { path: "/about" },
        title: "Sub Link",
        icon: "filter",
      },
    ],
  },
  {
    title: "Charts",
    icon: "ChartBarIcon",
    child: [
      {
        href: { path: "/about" },
        title: "Sub Link",
        icon: "ChartBarIcon",
      },
    ],
  },
]);
const navigation = ref([
  { name: "Home", to: "/", icon: HomeIcon },
  { name: "About", to: "/about", icon: ChartBarIcon },
]);
// const props = defineProps<{
//   isActive: boolean
//   width?: boolean
//   background: boolean
// }>()
const emit = defineEmits(["onToggleCollapse"]);

const toggleSidebar = () => {
  //   sidebar.value = !sidebar.value;
  //   console.log(sidebar.value);
  emit("onToggleCollapse");
};
</script>

<template>
  <sidebar-menu :menu="menu" :showOneChild="true" relative="true" @update:collapsed="onToggleCollapse" />
</template>



<style>
.router-link-exact-active {
  @apply bg-gray-100 text-gray-900;
}

.router-link-exact-active svg {
  @apply text-gray-900;
}

.v-sidebar-menu.vsm_relative {
  height: 100vh;
}

.v-sidebar-menu .vsm--link_level-1 .vsm--icon {
  color: red;
}
</style>
