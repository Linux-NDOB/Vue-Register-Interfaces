<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import BreadCrumb from '@/components/BreadCrumb.vue'

const solicitudes = ref([])

onMounted(() => {
  solicitudes.value = [
    {
      id_solitud: 1,
      dependencia: 'Dependencia 1',
      asunto: 'Asunto 1',
      decision: 'Decision 1',
      fecha_solitud: '2021-10-01',
      id_solicitante: 1,
      id_sesion: 1,
      id_descripcion: 1
    },
    {
      id_solitud: 2,
      dependencia: 'Dependencia 2',
      asunto: 'Asunto 2',
      decision: 'Decision 2',
      fecha_solitud: '2021-10-01',
      id_solicitante: 2,
      id_sesion: 2,
      id_descripcion: 2
    },
    {
      id_solitud: 3,
      dependencia: 'Dependencia 3',
      asunto: 'Asunto 3',
      decision: 'Decision 3',
      fecha_solitud: '2021-10-01',
      id_solicitante: 3,
      id_sesion: 3,
      id_descripcion: 3
    }
  ]
})
</script>

<template>
  <BreadCrumb modulo="solicitud" />
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
    <div class="flex justify-between items-center p-4">
      <h3 class="text-center mb-2">
        <strong>Lista de solicitantes</strong>
      </h3>
      <router-link to="/solicitud-agregar" class="btn-add"
        ><i class="fas fa-plus-square mr-2"></i>Agregar</router-link
      >
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">ID</th>
          <th scope="col" class="px-6 py-3">Dependencia</th>
          <th scope="col" class="px-6 py-3">Asunto</th>
          <th scope="col" class="px-6 py-3">Decision</th>
          <th scope="col" class="px-6 py-3">Fecha solicitud</th>
          <th scope="col" class="px-6 py-3">ID solicitante</th>
          <th scope="col" class="px-6 py-3">ID sesion</th>
          <th scope="col" class="px-6 py-3">ID descripcion</th>
          <th scope="col" class="px-6 py-3">Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
          v-for="solicitud in solicitudes"
          :key="solicitud.id"
        >
          <td class="px-6 py-4">{{ solicitud.id_solitud }}</td>
          <td class="px-6 py-4">{{ solicitud.dependencia }}</td>
          <td class="px-6 py-4">{{ solicitud.asunto }}</td>
          <td class="px-6 py-4">{{ solicitud.decision }}</td>
          <td class="px-6 py-4">{{ solicitud.fecha_solitud }}</td>
          <td class="px-6 py-4">{{ solicitud.id_solicitante }}</td>
          <td class="px-6 py-4">{{ solicitud.id_sesion }}</td>
          <td class="px-6 py-4">{{ solicitud.id_descripcion }}</td>
          <td class="px-6 py-4">
            <div class="flex gap-1">
              <router-link to="solicitud-ver" class="btn-view">
                <i class="fas fa-eye"></i>
              </router-link>
              <router-link to="solicitud-editar" class="btn-edit">
                <i class="fas fa-pencil"></i>
              </router-link>
              <a href="#" class="btn-delete" @click="handleClickDelete">
                <i class="fas fa-trash"></i>
              </a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
