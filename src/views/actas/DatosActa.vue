<script setup>
import { ref, onMounted } from 'vue'
import { getOneSesion } from '@/services/sesionService'
import { getAsistenciaMiembroBySesion } from '@/services/asistenciaMiembroService'
import { useRoute } from 'vue-router'
import LoaderView from '@/components/loader/LoaderView.vue'

const route = useRoute()
const idSesion = route.query.id
const loading = ref(true)
const sesion = ref([])
const asistenciaMiembros = ref([])

onMounted(async () => {
  try {
    sesion.value = await getOneSesion(idSesion)
    asistenciaMiembros.value = await getAsistenciaMiembroBySesion(idSesion)
    console.log(asistenciaMiembros.value)
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <h3 class="text-center uppercase text-2xl">Detalles del acta</h3>
  <div v-if="loading" class="flex justify-center items-center h-64">
    <LoaderView />
  </div>
  <div v-else class="container mx-auto mt-5">
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white border border-gray-300">
        <thead class="bg-gray-200 text-black">
          <tr>
            <th class="px-4 py-2 border-b"># Acta</th>
            <th class="px-4 py-2 border-b">Lugar</th>
            <th class="px-4 py-2 border-b">Fecha</th>
            <th class="px-4 py-2 border-b">Hora inicio</th>
            <th class="px-4 py-2 border-b">Hora Fin</th>
          </tr>
        </thead>

        <tbody>
          <tr class="hover:bg-gray-100">
            <td class="px-4 py-2 border-b">{{ sesion.IDSESION }}</td>
            <td class="px-4 py-2 border-b">{{ sesion.LUGAR }}</td>
            <td class="px-4 py-2 border-b">{{ sesion.FECHA }}</td>
            <td class="px-4 py-2 border-b">{{ sesion.HORAINICIO }}</td>
            <td class="px-4 py-2 border-b">{{ sesion.HORAFINAL }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex flex-col mt-5">
      <h3 class="text-center uppercase text-2xl">1. Verificación del Quorum</h3>
      <h4 class="uppercase">Integrantes del comite</h4>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-300">
          <thead class="bg-gray-200 text-black">
            <tr>
              <th class="px-4 py-2 border-b">Cargo</th>
              <th class="px-4 py-2 border-b">Nombre</th>
              <th class="px-4 py-2 border-b">Asistencia</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="hover:bg-gray-100"
              v-for="asis in asistenciaMiembros"
              :key="asis.SESION_IDSESION"
            >
              <td class="px-4 py-2 border-b">{{ asis.CARGO }}</td>
              <td class="px-4 py-2 border-b">{{ asis.NOMBRE }}</td>
              <td class="px-4 py-2 border-b">{{ asis.pivot.ESTADO_ASISTENCIA }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
