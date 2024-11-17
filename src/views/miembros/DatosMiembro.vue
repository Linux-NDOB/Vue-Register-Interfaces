<script setup>
import BreadCrumb from '@/components/BreadCrumb.vue'
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import { getOneMiembro } from '@/services/miembrosService'

const route = useRoute()
const id = ref(route.query.id)

const miembro = ref([])

onMounted(async () => {
  try {
    const response = await getOneMiembro(id.value)
    miembro.value = response
    console.log(response)
  } catch (error) {
    console.log('Error: ' + error)
  }
})
</script>

<template>
  <BreadCrumb modulo="miembros" accion="ver" />
  <div class="max-w-md mx-auto mt-8 shadow-md p-6 bg-white rounded-md">
    <h3 class="text-center mb-4">
      <b>Datos del miembro</b>
    </h3>
    <div class="relative z-0 w-full mb-5 group">
      <label for="nombres">Nombres</label>
      <input
        type="text"
        id="nombres"
        aria-label="disabled input"
        class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        :value="miembro.NOMBRE"
        disabled
      />
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <label for="cargo">Cargo</label>
      <input
        type="text"
        id="cargo"
        aria-label="disabled input"
        class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        :value="miembro.CARGO"
        disabled
      />
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        aria-label="disabled input"
        class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        :value="miembro.EMAIL"
        disabled
      />
    </div>
  </div>
</template>
