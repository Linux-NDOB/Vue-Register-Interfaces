<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { messageDelete } from '@/services/mensajes'
import BreadCrumb from '@/components/BreadCrumb.vue'

const solicitantes = ref([])

onMounted(() => {
  solicitantes.value = [
    {
      id: 111,
      nombre: 'Luis Perez',
      tipo_solicitante: 'Tipo 1',
      email: 'luis@gmail.com',
      celular: '1234567890'
    },
    {
      id: 112,
      nombre: 'Maria',
      tipo_solicitante: 'Tipo 2',
      email: 'maria@gmail.com',
      celular: '1234567890'
    },
    {
      id: 113,
      nombre: 'Jenny',
      tipo_solicitante: 'Tipo 2',
      email: 'jenny@gmail.com',
      celular: '1234567890'
    }
  ]
})

const handleClickDelete = () => {
  messageDelete()
}
</script>

<template>
  <BreadCrumb modulo="solicitantes" />
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
    <div class="flex justify-between items-center p-4">
      <h3 class="text-center mb-2">
        <strong>Lista de solicitantes</strong>
      </h3>
      <router-link to="/solicitantes-agregar" class="btn-add"
        ><i class="fas fa-plus-square mr-2"></i>Agregar</router-link
      >
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">ID</th>
          <th scope="col" class="px-6 py-3">Nombre</th>
          <th scope="col" class="px-6 py-3">Tipo Solicitante</th>
          <th scope="col" class="px-6 py-3">Email</th>
          <th scope="col" class="px-6 py-3">Celular</th>
          <th scope="col" class="px-6 py-3">Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
          v-for="solicitante in solicitantes"
          :key="solicitante.id"
        >
          <td class="px-6 py-4">{{ solicitante.id }}</td>
          <td class="px-6 py-4">{{ solicitante.nombre }}</td>
          <td class="px-6 py-4">{{ solicitante.tipo_solicitante }}</td>
          <td class="px-6 py-4">{{ solicitante.email }}</td>
          <td class="px-6 py-4">{{ solicitante.celular }}</td>
          <td class="px-6 py-4">
            <router-link to="solicitantes-ver" class="btn-view">
              <i class="fas fa-eye"></i>
            </router-link>
            <router-link to="solicitantes-editar" class="btn-edit">
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
