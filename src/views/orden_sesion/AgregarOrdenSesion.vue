<script setup>
import BreadCrumb from '@/components/BreadCrumb.vue'
import { ref } from 'vue'
import { saveOrdenSesion } from '@/services/ordenSesionService'
import { messageError, messageSuccess } from '@/services/mensajes'
import { generarCampos } from '@/logic/utils'
import { useRoute } from 'vue-router'
import router from '@/router'

const route = useRoute()
const idSesion = route.query.id

const numOrdenes = ref(1)
const ordenes = ref([
  {
    TEMA: '',
    DESCRIPCION: ''
  }
])

const handleGenerarCampos = () => {
  generarCampos(numOrdenes, ordenes)
}

const agregarOrden = async (e) => {
  try {
    e.preventDefault()

    const response = await saveOrdenSesion({ ordenes: ordenes.value }, idSesion)

    if (response.message === 'Temas asignados correctamente') {
      messageSuccess(response.message, 'siguiente', `/asistencia-miembros-agregar?id=${idSesion}`)
    } else {
      messageError(response.message)
    }
  } catch (error) {
    console.error(error)
    messageError('Error al guardar las órdenes')
  }
}
</script>

<template>
  <BreadCrumb modulo="orden-sesion" accion="agregar" />
  <div class="container mx-auto p-6">
    <h1 class="text-2xl font-bold mb-4">Agregar Orden Sesión</h1>

    <!-- Generador de campos -->
    <div class="flex gap-4 mb-6">
      <div class="flex-1 max-w-xs">
        <label class="block text-sm font-medium mb-2">Número de temas a agregar</label>
        <input
          type="number"
          v-model="numOrdenes"
          min="1"
          max="10"
          class="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div class="flex items-end">
        <button
          @click="handleGenerarCampos"
          type="button"
          class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Generar campos
        </button>
      </div>
    </div>

    <form @submit="agregarOrden" class="space-y-6">
      <!-- Campos dinámicos -->
      <div v-for="(orden, index) in ordenes" :key="index" class="p-4 border rounded-lg bg-gray-50">
        <h3 class="font-semibold mb-4">Tema {{ index + 1 }}</h3>
        <div class="grid gap-4 md:grid-cols-2">
          <div>
            <label class="block text-sm font-medium mb-2">Tema</label>
            <input
              type="text"
              v-model="orden.TEMA"
              class="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium mb-2">Descripción</label>
            <textarea
              v-model="orden.DESCRIPCION"
              class="border rounded-lg p-2 w-full h-24 resize-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
        </div>
      </div>

      <div class="flex justify-end gap-4">
        <button
          type="button"
          @click="router.back()"
          class="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"
        >
          Cancelar
        </button>
        <button
          type="submit"
          class="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors"
        >
          Guardar
        </button>
      </div>
    </form>
  </div>
</template>
