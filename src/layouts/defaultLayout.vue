<script setup lang="ts">
import TheSidebar from '~/components/TheSidebar.vue'
import TheNavbar from '~/components/TheNavbar.vue'
import ThePageHeader from '~/components/ThePageHeader.vue'
import { ref, onMounted } from 'vue'
import {
  Dialog,
  DialogOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { SearchIcon } from '@heroicons/vue/solid'

const sidebarOpen = ref(false)
const stateSidebar = ref(true)

const toggleSidebar = () => {
  stateSidebar.value = !stateSidebar.value

}
onMounted(() => {
  onResize()
  window.addEventListener('resize', onResize)
})
const onResize = () => {
  if (window.innerWidth < 900) {
    stateSidebar.value = false
  }
}
</script>

<template>
  <div class="flex">
    <!-- <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="fixed inset-0 flex z-40 md:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
          enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
          leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>
        <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0" leave-to="-translate-x-full">
          <div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
            <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0"
              enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
              <div class="absolute top-0 right-0 -mr-12 pt-2">
                <button type="button"
                  class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  @click="sidebarOpen = false">
                  <span class="sr-only">Close sidebar</span>
                  <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </TransitionChild>
            <div class="flex-shrink-0 flex items-center px-4">
              <img class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg" alt="Workflow" />
            </div>
            <div class="mt-5 flex-1 h-0 overflow-y-auto">
              <nav class="px-2 space-y-1">
                <a v-for="item in navigation" :key="item.name" :href="item.href"
                  :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center px-2 py-2 text-base font-medium rounded-md']">
                  <component :is="item.icon"
                    :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-4 flex-shrink-0 h-6 w-6']"
                    aria-hidden="true" />
                  {{  item.name  }}
                </a>
              </nav>
            </div>
          </div>
        </TransitionChild>
        <div class="flex-shrink-0 w-14" aria-hidden="true">
        </div>
      </Dialog>
    </TransitionRoot> -->
    <the-sidebar :isActive="stateSidebar" @toggleSidebar="toggleSidebar" />
    <div :class="['flex flex-col flex-1 h-screen overflow-hidden']">
      <the-navbar />
      <main class="flex-1">
        <div class="py-6 h-full">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <the-page-header />
          </div>
          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-full">
            <!-- Replace with your content -->
            <div class="py-4 h-full">
              <div class="shadow-xl rounded-lg p-4 h-full border-solid border border-gray-100">
                <router-view />
              </div>
            </div>
            <!-- /End replace -->
          </div>
        </div>
      </main>
    </div>
  </div>
</template>