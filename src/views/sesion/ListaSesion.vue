<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { getAllSesion } from '@/services/sesionService'
import BreadCrumb from '@/components/BreadCrumb.vue'

const sesiones = ref([])

onMounted(async () => {
  try {
    const response = await getAllSesion()
    sesiones.value = response
    console.log(response)
  } catch (error) {
    console.error(error)
  }
})

// const handleClickDelete = () => {
//   messageDelete()
// }
</script>

<template>
  <BreadCrumb modulo="sesion" />
  <div class="flex justify-between items-center p-4">
    <h3 class="text-center mb-2 text-2xl">
      <strong>Lista de sesiones</strong>
    </h3>
    <router-link to="/sesion-agregar" class="btn-add"
      ><i class="fas fa-plus-square mr-2"></i>Agregar</router-link
    >
  </div>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-white uppercase bg-slate-800 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">ID</th>
          <th scope="col" class="px-6 py-3">Lugar</th>
          <th scope="col" class="px-6 py-3">Fecha</th>
          <th scope="col" class="px-6 py-3">Hora inicio</th>
          <th scope="col" class="px-6 py-3">Hora final</th>
          <th scope="col" class="px-6 py-3">Presidente</th>
          <th scope="col" class="px-6 py-3">Secretario</th>
          <th scope="col" class="px-6 py-3">Estado</th>
          <th scope="col" class="px-6 py-3">Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
          v-for="sesion in sesiones"
          :key="sesion.id_sesion"
        >
          <td class="px-6 py-4">{{ sesion.IDSESION }}</td>
          <td class="px-6 py-4">{{ sesion.LUGAR }}</td>
          <td class="px-6 py-4">{{ sesion.FECHA }}</td>
          <td class="px-6 py-4">{{ sesion.HORAINICIO }}</td>
          <td class="px-6 py-4">{{ sesion.HORAFINAL }}</td>
          <td class="px-6 py-4">{{ sesion.PRESIDENTE }}</td>
          <td class="px-6 py-4">{{ sesion.SECRETARIO }}</td>
          <td class="px-6 py-4">
            {{ sesion.actas && sesion.actas.ESTADO != null ? sesion.actas.ESTADO : '' }}
          </td>
          <td class="px-6 py-4">
            <div class="flex">
              <router-link
                :to="{ name: 'sesion-iniciar', query: { id: sesion.IDSESION } }"
                class="btn-add mr-2"
                v-if="sesion.actas.ESTADO === null"
              >
                <i class="fas fa-play"></i>
              </router-link>
              <router-link to="sesion-ver" class="btn-edit">
                <i class="fas fa-eye"></i>
              </router-link>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
