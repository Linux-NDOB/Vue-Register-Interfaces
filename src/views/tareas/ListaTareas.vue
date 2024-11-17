<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { messageDelete } from '@/services/mensajes'
import BreadCrumb from '@/components/BreadCrumb.vue'

const tareas = ref([])

onMounted(() => {
  tareas.value = [
    {
      id_tareas: 1,
      descripcion: 'Tarea 1',
      sesion_idsesion: 1,
      fecha_entrega: '2021-10-01',
      fecha_verificacion: '2021-10-02'
    },
    {
      id_tareas: 2,
      descripcion: 'Tarea 2',
      sesion_idsesion: 2,
      fecha_entrega: '2021-10-01',
      fecha_verificacion: '2021-10-02'
    },
    {
      id_tareas: 3,
      descripcion: 'Tarea 3',
      sesion_idsesion: 3,
      fecha_entrega: '2021-10-01',
      fecha_verificacion: '2021-10-02'
    }
  ]
})

const handleClickDelete = () => {
  messageDelete()
}
</script>

<template>
  <BreadCrumb modulo="tareas" />
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
    <div class="flex justify-between items-center p-4">
      <h3 class="text-center mb-2">
        <strong>Lista de solicitantes</strong>
      </h3>
      <router-link to="/tareas-agregar" class="btn-add"
        ><i class="fas fa-plus-square mr-2"></i>Agregar</router-link
      >
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">ID</th>
          <th scope="col" class="px-6 py-3">Descripción</th>
          <th scope="col" class="px-6 py-3">ID sesion</th>
          <th scope="col" class="px-6 py-3">Fecha entrega</th>
          <th scope="col" class="px-6 py-3">Fecha verifi</th>
          <th scope="col" class="px-6 py-3">Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
          v-for="tarea in tareas"
          :key="tarea.id_tareas"
        >
          <td class="px-6 py-4">{{ tarea.id_tareas }}</td>
          <td class="px-6 py-4">{{ tarea.descripcion }}</td>
          <td class="px-6 py-4">{{ tarea.sesion_idsesion }}</td>
          <td class="px-6 py-4">{{ tarea.fecha_entrega }}</td>
          <td class="px-6 py-4">{{ tarea.fecha_verificacion }}</td>
          <td class="px-6 py-4">
            <router-link to="tareas-ver" class="btn-view">
              <i class="fas fa-eye"></i>
            </router-link>
            <router-link to="tareas-editar" class="btn-edit">
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
