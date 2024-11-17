<script setup>
import { ref, onMounted } from 'vue'
import { getAllInvitados } from '@/services/invitadosService'
import { messageSuccess, messageError } from '@/services/mensajes'
import { saveAsistenciaInvitados } from '@/services/asistenciaInvitadosService'
import { useRoute } from 'vue-router'

const invitados = ref([])
const invitadosSeleccionados = ref([])
const route = useRoute()
const idSesion = route.query.id

onMounted(async () => {
  try {
    const response = await getAllInvitados()
    invitados.value = response
  } catch (error) {
    console.log(error)
  }
})

const toggleSeleccion = (id) => {
  if (invitadosSeleccionados.value.includes(id)) {
    invitadosSeleccionados.value = invitadosSeleccionados.value.filter(
      (miembroId) => miembroId !== id
    )
  } else {
    invitadosSeleccionados.value.push(id)
  }
}

const enviarInvitaciones = async () => {
  try {
    const response = await saveAsistenciaInvitados(
      { invitados: invitadosSeleccionados.value },
      idSesion
    )
    if (response.message === 'Miembros asignados correctamente') {
      messageSuccess('Invitaciones enviadas correctamente', 'finalizar', `/sesion`)
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
      <li v-for="invitado in invitados" :key="invitado.IDINVITADOS" class="flex items-center mb-2">
        <input
          type="checkbox"
          :value="invitado.IDINVITADOS"
          @change="toggleSeleccion(invitado.IDINVITADOS)"
          class="mr-2"
        />
        <span>{{ invitado.NOMBRE }}</span>
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
