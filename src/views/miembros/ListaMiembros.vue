<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { messageDelete } from '@/services/mensajes'
import { getAllMiembros } from '../../services/miembrosService'
import BreadCrumb from '@/components/BreadCrumb.vue'

const miembros = ref([])

onMounted(async () => {
  try {
    miembros.value = []
    const response = await getAllMiembros()
    miembros.value = response
    console.log(response)
  } catch (error) {
    console.log('Error: ' + error)
  }
})

const handleClickDelete = () => {
  messageDelete()
}
</script>

<template>
  <BreadCrumb modulo="miembros" />
  <div class="flex justify-between items-center p-4">
    <h3 class="text-center mb-2 text-2xl">
      <strong>Lista de Miembros</strong>
    </h3>
    <router-link to="/miembros-agregar" class="btn-add"
      ><i class="fas fa-plus-square mr-2"></i>Agregar</router-link
    >
  </div>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-white uppercase bg-slate-700 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">ID</th>
          <th scope="col" class="px-6 py-3">Nombre miembro</th>
          <th scope="col" class="px-6 py-3">Cargo</th>
          <th scope="col" class="px-6 py-3">Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
          v-for="miembro in miembros"
          :key="miembro.id"
        >
          <td class="px-6 py-4">{{ miembro.IDMIEMBRO }}</td>
          <td class="px-6 py-4">{{ miembro.NOMBRE }}</td>
          <td class="px-6 py-4">{{ miembro.CARGO }}</td>
          <td class="px-6 py-4">
            <router-link
              :to="{ name: 'miembros-ver', query: { id: miembro.IDMIEMBRO } }"
              class="btn-view"
            >
              <i class="fas fa-eye"></i>
            </router-link>
            <router-link
              :to="{ name: 'miembros-editar', query: { id: miembro.IDMIEMBRO } }"
              class="btn-edit"
            >
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
