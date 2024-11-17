<script setup>
import BreadCrumb from '@/components/BreadCrumb.vue'
import router from '@/router'
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'
import { getAllOrdenSesion } from '@/services/ordenSesionService'

const ordenes = ref([])

onMounted(async () => {
  try {
    const response = await getAllOrdenSesion()
    ordenes.value = response
  } catch (error) {
    console.log(error)
  }
})

function editarOrden(id) {
  router.push(`/orden-sesion-editar/${id}`)
}
</script>

<template>
  <BreadCrumb modulo="orden-sesion" />
  <div class="container mx-auto p-4">
    <div class="flex justify-between items-center mb-2">
      <h1 class="text-lg font-bold">Listado</h1>
      <router-link
        class="bg-green-500 text-white px-2 py-1 rounded text-sm"
        to="/orden-sesion-agregar"
      >
        Agregar
      </router-link>
    </div>

    <table class="min-w-full bg-white border border-gray-300 text-sm">
      <thead class="bg-black">
        <tr>
          <th class="px-2 py-1 border text-left text-white font-semibold">Tema</th>
          <th class="px-2 py-1 border text-left text-white font-semibold">Descripción</th>
          <th class="px-2 py-1 border text-left text-white font-semibold">IDSESION</th>
          <th class="px-2 border text-left text-white font-semibold">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(orden, index) in ordenes" :key="index" class="border-t">
          <td class="px-2 py-1 border">{{ orden.TEMA }}</td>
          <td class="px-2 py-1 border">{{ orden.DESCRIPCION }}</td>
          <td class="px-2 py-1 border">{{ orden.SESION_IDSESION }}</td>
          <td class="px-2 py-1 border">
            <button
              class="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-3"
              @click="editarOrden(orden.SESION_IDSESION)"
            >
              <i class="fas fa-pen-to-square"></i>
            </button>
            <button
              class="bg-red-500 text-white px-2 py-1 rounded text-xs"
              @click="borrarOrden(orden.SESION_IDSESION)"
            >
              <i class="fas fa-delete-left"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
