<script setup>
import SidebarHeader from './SidebarHeader.vue'
import SidebarNav from './SidebarNav.vue'
</script>

<template>
  <aside class="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl overflow-y-auto">
    <SidebarHeader />
    <SidebarNav />
  </aside>
</template>
