<script setup>
import { messageDelete } from '@/services/mensajes'
import BreadCrumb from '@/components/BreadCrumb.vue'
import { ref, onMounted } from 'vue'

const asistencias = ref([])

onMounted(() => {
  asistencias.value = [
    {
      id_sesion: 1,
      id_miembros: 1,
      estado_asistencia: 'Presente'
    },
    {
      id_sesion: 1,
      id_miembros: 2,
      estado_asistencia: 'Ausente'
    },
    {
      id_sesion: 1,
      id_miembros: 3,
      estado_asistencia: 'Presente'
    }
  ]
})

const handleClickDelete = () => {
  messageDelete()
}
</script>

<template>
  <BreadCrumb modulo="asistencia-miembros" />
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
    <div class="flex justify-between items-center p-4">
      <h3 class="text-center mb-2">
        <strong>Lista de asistencia de miembros</strong>
      </h3>
      <router-link to="/asistencia-miembros-agregar" class="btn-add"
        ><i class="fas fa-plus-square mr-2"></i>Agregar</router-link
      >
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">IDSESION</th>
          <th scope="col" class="px-6 py-3">IDMIEMBROS</th>
          <th scope="col" class="px-6 py-3">ESTADOASISTENCIA</th>
          <th scope="col" class="px-6 py-3">Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
          v-for="asistencia in asistencias"
          :key="asistencia.id_sesion"
        >
          <td class="px-6 py-4">{{ asistencia.id_sesion }}</td>
          <td class="px-6 py-4">{{ asistencia.id_miembros }}</td>
          <td class="px-6 py-4">{{ asistencia.estado_asistencia }}</td>
          <td class="px-6 py-4">
            <router-link to="/" class="btn-view">
              <i class="fas fa-eye"></i>
            </router-link>
            <router-link to="/" class="btn-edit">
              <i class="fas fa-pencil"></i>
            </router-link>
            <a href="#" class="btn-delete" @click="handleClickDelete">
              <i class="fas fa-trash"></i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
