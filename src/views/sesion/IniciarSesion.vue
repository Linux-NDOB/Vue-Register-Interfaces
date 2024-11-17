<script setup>
import BreadCrumb from '@/components/BreadCrumb.vue'
import { ref, onMounted } from 'vue'
import { getActaBySesion } from '@/services/sesionService'
import { getAsistenciaMiembro, saveAsistenciaMiembro } from '@/services/asistenciaMiembroService'
import { useRoute } from 'vue-router'
import { messageSuccess, messageError } from '@/services/mensajes'
import { getOneAsistenciaInvitados } from '@/services/asistenciaInvitadosService'
import { getOrdenesBySesion } from '@/services/ordenSesionService'
import { getActaByAnteriorSesion } from '@/services/sesionService'
import { updateActa } from '@/services/actasService'

const route = useRoute()
const idSesion = route.query.id

const sesion = ref({
  actas: {}
})
const miembros = ref([])
const invitados = ref([])
const ordenes = ref([])
const actaAnterior = ref({
  actas: {}
})

onMounted(async () => {
  try {
    sesion.value = await getActaBySesion(idSesion)
    miembros.value = await getAsistenciaMiembro(idSesion)
    invitados.value = await getOneAsistenciaInvitados(idSesion)
    ordenes.value = await getOrdenesBySesion(idSesion)
    actaAnterior.value = await getActaByAnteriorSesion(idSesion)
  } catch (error) {
    console.error(error)
  }
})

const enviarAsistencia = async (e) => {
  e.preventDefault()

  const asistencia = miembros.value.map((miembro) => ({
    MIEMBROS_IDMIEMBRO: miembro.IDMIEMBRO,
    ESTADO_ASISTENCIA: miembro.pivot.ESTADO_ASISTENCIA
  }))

  try {
    console.log(asistencia)
    const response = await saveAsistenciaMiembro({ miembros: asistencia }, idSesion)
    if (response.message === 'Asistencia guardada correctamente') {
      messageSuccess('Asistencia guardada correctamente')
    } else {
      messageError('Error al guardar la asistencia')
    }
  } catch (error) {
    console.error('Error:', error)
  }
}

const aprobarActa = async () => {
  try {
    const actaActualizada = {
      ...actaAnterior.value.actas,
      ESTADO: 'FIRMADA'
    }
    const response = await updateActa(actaAnterior.value.actas.NUM_ACTAS, actaActualizada)
    if (response.message === 'Acta actualizada') {
      messageSuccess('Acta aprobada')
    } else {
      messageError('Error al aprobar el acta')
    }
  } catch (error) {
    console.error('Error:', error)
    messageError('Error al aprobar el acta')
  }
}
</script>

<template>
  <BreadCrumb modulo="sesion" accion="inicio" />
  <div class="container mx-auto p-6">
    <div class="flex flex-wrap gap-4">
      <div class="flex items-center">
        <span class="font-bold mr-2">Número de Acta:</span>
        <p>{{ sesion.actas.NUM_ACTAS }}</p>
      </div>
      <div class="flex items-center">
        <span class="font-bold mr-2">Lugar:</span>
        <p>{{ sesion.LUGAR }}</p>
      </div>
      <div class="flex items-center">
        <span class="font-bold mr-2">Hora Inicio:</span>
        <p>{{ sesion.HORAINICIO }}</p>
      </div>
      <div class="flex items-center">
        <span class="font-bold mr-2">Fecha:</span>
        <p>{{ sesion.FECHA }}</p>
      </div>
    </div>
    <div class="border-t border-black mt-4 w-full"></div>
    <div class="mt-4 bg-slate-50 p-4 rounded-sm">
      <h2 class="text-xl font-bold mb-4 uppercase text-center">Asistencia de Miembros</h2>
      <form @submit="enviarAsistencia">
        <div
          v-for="miembro in miembros"
          :key="miembro.IDMIEMBRO"
          class="flex justify-between items-center mb-2"
        >
          <div>
            <p class="font-bold">{{ miembro.NOMBRE }}</p>
          </div>
          <div>
            <p class="text-sm text-gray-600">{{ miembro.CARGO }}</p>
          </div>
          <select v-model="miembro.pivot.ESTADO_ASISTENCIA" class="border rounded p-2">
            <option value="ASISTIÓ">ASISTIÓ</option>
            <option value="EXCUSA">EXCUSA</option>
            <option value="NO ASISTIÓ">NO ASISTIÓ</option>
          </select>
        </div>
        <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
        >
          Guardar Asistencia
        </button>
      </form>
    </div>
    <div class="border-t border-black mt-4 w-full"></div>
    <div class="mt-4 bg-slate-50 p-4 rounded-sm">
      <div class="overflow-x-auto">
        <h2 class="text-xl font-bold mb-4 uppercase text-center">Asistentes invitados</h2>
        <table class="min-w-full bg-white border border-gray-300">
          <thead class="bg-gray-200 text-black">
            <tr>
              <th class="px-4 py-2 border-b text-left">Nombre</th>
              <th class="px-4 py-2 border-b text-left">Cargo</th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover:bg-gray-100" v-for="invitado in invitados" :key="invitado.IDINVITADOS">
              <td class="px-4 py-2 border-b">{{ invitado.NOMBRE }}</td>
              <td class="px-4 py-2 border-b">{{ invitado.CARGO }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="mt-4 bg-slate-50 p-4 rounded-sm">
      <div class="overflow-x-auto">
        <h2 class="text-xl font-bold mb-4 uppercase text-center">Aprobacion del orden del dia</h2>
        <div class="flex flex-col gap-2">
          <ul>
            <li v-for="(orden, index) in ordenes" :key="orden.TEMA">
              {{ index + 1 }} {{ orden.TEMA }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="mt-4 bg-slate-50 p-4 rounded-sm">
      <h2 class="text-xl font-bold mb-4 uppercase text-center">Aprobacion del acta anterior</h2>
      <div class="flex justify-between">
        <p>{{ actaAnterior.actas.NUM_ACTAS }}</p>
        <p>{{ actaAnterior.FECHA }}</p>
        <!-- boton para aprobar el acta -->
        <button
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          @click="aprobarActa"
        >
          Aprobar Acta
        </button>
      </div>
    </div>
  </div>
</template>
