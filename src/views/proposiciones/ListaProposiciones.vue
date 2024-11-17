<script setup>
import { onMounted, ref } from 'vue'
import BreadCrumb from '@/components/BreadCrumb.vue'
import { messageDelete } from '@/services/mensajes'

const proposiciones = ref([])

onMounted(() => {
  proposiciones.value = [
    {
      id_proposicion: 1,
      descripcion: 'Proposición 1',
      desicion: 'Aprobado',
      id_miembro: 1,
      id_sesion: 1
    },
    {
      id_proposicion: 2,
      descripcion: 'Proposición 2',
      desicion: 'Rechazado',
      id_miembro: 2,
      id_sesion: 1
    },
    {
      id_proposicion: 3,
      descripcion: 'Proposición 3',
      desicion: 'Aprobado',
      id_miembro: 3,
      id_sesion: 1
    }
  ]
})

const handleClickDelete = () => {
  messageDelete()
}
</script>

<template>
  <BreadCrumb modulo="proposiciones" />
  <div class="container mx-auto p-4">
    <div class="flex justify-between items-center p-4">
      <h3 class="text-2xl font-semibold my-4">Lista de Proposiciones</h3>
      <button to="/proposiciones-agregar" class="btn-add">
        <i class="fas fa-plus-square mr-2"></i>Agregar
      </button>
    </div>
    <table class="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
      <thead class="bg-gray-100">
        <tr>
          <th class="py-2 px-4 border-b">ID</th>
          <th class="py-2 px-4 border-b">Descripcion</th>
          <th class="py-2 px-4 border-b">Desicion</th>
          <th class="py-2 px-4 border-b">ID Miembro</th>
          <th class="py-2 px-4 border-b">ID Sesion</th>
          <th class="py-2 px-4 border-b">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="proposicion in proposiciones" :key="proposicion.id" class="border-b">
          <td class="py-2 px-4">{{ proposicion.id_proposicion }}</td>
          <td class="py-2 px-4">{{ proposicion.descripcion }}</td>
          <td class="py-2 px-4">{{ proposicion.desicion }}</td>
          <td class="py-2 px-4">{{ proposicion.id_miembro }}</td>
          <td class="py-2 px-4">{{ proposicion.id_sesion }}</td>
          <td class="py-2 px-4 flex space-x-2">
            <button class="btn-edit">Editar</button>
            <button class="btn-delete" @click="handleClickDelete">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
