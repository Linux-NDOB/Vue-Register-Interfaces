<script setup>
import BreadCrumb from '@/components/BreadCrumb.vue'
import { ref, onMounted } from 'vue'
import { getAllActas } from '@/services/actasService'
import { RouterLink } from 'vue-router'
import router from '@/router'

const actas = ref([])

onMounted(async () => {
  try {
    const response = await getAllActas()
    actas.value = response
    console.log(response)
  } catch (error) {
    console.log('Error: ' + error)
  }
})

function agregarActa() {
  router.push('/actas-agregar')
}
</script>

<template>
  <BreadCrumb modulo="actas" />
  <div class="container mx-auto mt-5">
    <div class="flex justify-between items-center mb-4">
      <h3 class="text-justify mb-4 font-bold text-2xl">
        <strong>Lista de Actas</strong>
      </h3>
      <router-link
        to="/actas-agregar"
        class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        @click="agregarActa"
      >
        <i class="fas fa-plus-square mr-2"></i> Agregar Acta
      </router-link>
    </div>
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white border border-gray-300">
        <thead class="bg-gray-800 text-white">
          <tr>
            <th class="px-4 py-2 border-b"># Acta</th>
            <th class="px-4 py-2 border-b">Estado</th>
            <th class="px-4 py-2 border-b">Sesión</th>
            <th class="px-4 py-2 border-b">Acciones</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="acta in actas" :key="acta.NUM_ACTAS" class="hover:bg-gray-100">
            <td class="px-4 py-2 border-b">{{ acta.NUM_ACTAS }}</td>
            <td class="px-4 py-2 border-b">{{ acta.ESTADO }}</td>
            <td class="px-4 py-2 border-b">{{ acta.SESION_IDSESION }}</td>
            <td class="px-4 py-2 border-b">
              <button
                class="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mr-2"
                v-if="acta.ESTADO !== 'FIRMADA'"
              >
                <i class="fas fa-pencil"></i>
              </button>
              <router-link
                :to="{ name: 'actas-ver', query: { id: acta.SESION_IDSESION } }"
                class="btn-view"
              >
                <i class="fas fa-eye"></i>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
