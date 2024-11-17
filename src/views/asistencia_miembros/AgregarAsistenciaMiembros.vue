<script setup>
import { ref, onMounted } from 'vue'
import { getAllMiembros } from '@/services/miembrosService'
import { messageSuccess, messageError } from '@/services/mensajes'
import { saveAsistenciaMiembro } from '@/services/asistenciaMiembroService'
import { useRoute } from 'vue-router'

const miembros = ref([])
const miembrosSeleccionados = ref([])
const route = useRoute()
const idSesion = route.query.id

onMounted(async () => {
  try {
    const response = await getAllMiembros()
    miembros.value = response
  } catch (error) {
    console.log(error)
  }
})

const toggleSeleccion = (id) => {
  if (miembrosSeleccionados.value.includes(id)) {
    miembrosSeleccionados.value = miembrosSeleccionados.value.filter(
      (miembroId) => miembroId !== id
    )
  } else {
    miembrosSeleccionados.value.push(id)
  }
}

const enviarInvitaciones = async (e) => {
  e.preventDefault()
  try {
    const response = await saveAsistenciaMiembro(
      { miembros: miembrosSeleccionados.value },
      idSesion
    )
    if (response.message === 'Miembros asignados correctamente') {
      messageSuccess(
        'Invitaciones enviadas correctamente',
        'siguiente',
        `/asistencia-invitado-agregar?id=${idSesion}`
      )
    } else {
      messageError(response.message)
    }
  } catch (error) {
    console.error(error)
    messageError('Error al enviar las invitaciones')
  }
}
</script>

<template>
  <div class="container mx-auto p-6">
    <h1 class="text-2xl font-bold mb-4">Citar Miembros</h1>
    <ul class="bg-white shadow-md rounded-lg p-4">
      <li v-for="miembro in miembros" :key="miembro.IDMIEMBRO" class="flex items-center mb-2">
        <input
          type="checkbox"
          :value="miembro.IDMIEMBRO"
          @change="toggleSeleccion(miembro.IDMIEMBRO)"
          class="mr-2"
        />
        <span>{{ miembro.NOMBRE }}</span>
      </li>
    </ul>
    <div class="mt-4">
      <button
        @click="enviarInvitaciones"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Enviar Invitaciones
      </button>
    </div>
  </div>
</template>
