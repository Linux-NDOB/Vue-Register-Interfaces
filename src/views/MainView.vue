<script setup>
import SidebarArea from '@/components/sidebar/SidebarArea.vue'
import MainHeader from '@/components/header/MainHeader.vue'
import FooterMain from '@/components/footer/FooterMain.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="bg-gray-100 font-family-karla flex">
    <SidebarArea />
    <div class="w-full flex flex-col h-screen overflow-y-hidden">
      <MainHeader />
      <div class="w-full overflow-x-hidden border-t flex flex-col flex-grow">
        <main class="flex-grow p-6">
          <RouterView></RouterView>
        </main>
        <FooterMain />
      </div>
    </div>
  </div>
</template>
