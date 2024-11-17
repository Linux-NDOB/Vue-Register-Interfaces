<script setup>
import BreadCrumb from '@/components/BreadCrumb.vue'
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'

const encargadosTareas = ref([])

onMounted(() => {
  encargadosTareas.value = [
    {
      estado: 'Estado 1',
      id_miembros: 1,
      id_tareas: 1
    },
    {
      estado: 'Estado 2',
      id_miembros: 2,
      id_tareas: 2
    },
    {
      estado: 'Estado 2',
      id_miembros: 2,
      id_tareas: 2
    }
  ]
})
</script>

<template>
  <BreadCrumb modulo="encargados-tareas" />
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
    <div class="flex justify-between items-center p-4">
      <h3 class="text-center mb-2">
        <strong>Lista de Encargados</strong>
      </h3>
      <router-link to="/encargados-tareas-agregar" class="btn-add"
        ><i class="fas fa-plus-square mr-2"></i>Agregar</router-link
      >
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">Estado</th>
          <th scope="col" class="px-6 py-3">ID miembros</th>
          <th scope="col" class="px-6 py-3">ID tareas</th>
          <th scope="col" class="px-6 py-3">Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
          v-for="encargado in encargadosTareas"
          :key="encargado.estado"
        >
          <td class="px-6 py-4">{{ encargado.estado }}</td>
          <td class="px-6 py-4">{{ encargado.id_miembros }}</td>
          <td class="px-6 py-4">{{ encargado.id_tareas }}</td>
          <td class="px-6 py-4">
            <router-link to="encargados-tareas-ver" class="btn-view">
              <i class="fas fa-eye"></i>
            </router-link>
            <router-link to="encargados-tareas-editar" class="btn-edit">
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
